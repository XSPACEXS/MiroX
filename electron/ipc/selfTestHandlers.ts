import { BrowserWindow, ipcMain, app } from 'electron'
import path from 'path'
import fs from 'fs/promises'

const consoleErrors: string[] = []

export function registerSelfTestHandlers(mainWindow: BrowserWindow): void {
  // Start capturing console errors
  // Electron 28: console-message params are (event, level, message, line, sourceId)
  // level: 0=debug, 1=info, 2=warning, 3=error
  mainWindow.webContents.on('console-message', (_event, level, message) => {
    if (level >= 2) {
      const label = level === 3 ? 'error' : 'warning'
      consoleErrors.push(`[${label}] ${message}`)
      // Keep max 500 entries
      if (consoleErrors.length > 500) {
        consoleErrors.splice(0, consoleErrors.length - 500)
      }
    }
  })

  // Screenshot
  ipcMain.removeHandler('selftest:screenshot')
  ipcMain.handle('selftest:screenshot', async () => {
    try {
      const image = await mainWindow.webContents.capturePage()
      const pngBuffer = image.toPNG()
      const dataURL = `data:image/png;base64,${pngBuffer.toString('base64')}`

      // Also save to temp file
      const tempDir = path.join(app.getPath('temp'), 'mirox-screenshots')
      await fs.mkdir(tempDir, { recursive: true })
      const fileName = `screenshot-${Date.now()}.png`
      const filePath = path.join(tempDir, fileName)
      await fs.writeFile(filePath, pngBuffer)

      return { ok: true, dataURL, filePath }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // DOM check — run arbitrary JS in renderer
  ipcMain.removeHandler('selftest:dom-check')
  ipcMain.handle('selftest:dom-check', async (_event, code: string) => {
    try {
      const result = await mainWindow.webContents.executeJavaScript(code)
      return { ok: true, result }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Get console errors
  ipcMain.removeHandler('selftest:console-errors')
  ipcMain.handle('selftest:console-errors', () => {
    return { ok: true, errors: [...consoleErrors] }
  })

  // Run all predefined DOM checks
  ipcMain.removeHandler('selftest:run-all')
  ipcMain.handle('selftest:run-all', async () => {
    const checks = [
      {
        label: 'Sidebar exists',
        code: `(() => {
          const el = document.querySelector('aside');
          if (!el) return { exists: false };
          return { exists: true, childCount: el.children.length };
        })()`,
        evaluate: (r: { exists: boolean; childCount?: number }) =>
          r.exists
            ? { passed: true, detail: `Sidebar found with ${r.childCount} children` }
            : { passed: false, detail: 'Sidebar <aside> not found' },
      },
      {
        label: 'Background color is #0A0A0A',
        code: `(() => {
          const bg = getComputedStyle(document.body).backgroundColor;
          return { bg };
        })()`,
        evaluate: (r: { bg: string }) => {
          const is0A = r.bg === 'rgb(10, 10, 10)' || r.bg === '#0a0a0a' || r.bg === '#0A0A0A'
          return is0A
            ? { passed: true, detail: `Background: ${r.bg}` }
            : { passed: false, detail: `Expected #0A0A0A, got ${r.bg}` }
        },
      },
      {
        label: 'TopBar visible',
        code: `(() => {
          const el = document.querySelector('header') || document.querySelector('[class*="TopBar"]') || document.querySelector('[class*="topbar"]');
          return { exists: !!el };
        })()`,
        evaluate: (r: { exists: boolean }) =>
          r.exists
            ? { passed: true, detail: 'TopBar element found' }
            : { passed: false, detail: 'TopBar not found' },
      },
      {
        label: 'Page title set',
        code: `(() => {
          return { title: document.title };
        })()`,
        evaluate: (r: { title: string }) =>
          r.title && r.title.length > 0
            ? { passed: true, detail: `Title: "${r.title}"` }
            : { passed: false, detail: 'Page title is empty' },
      },
      {
        label: 'Nav items present',
        code: `(() => {
          const nav = document.querySelector('nav');
          if (!nav) return { exists: false, count: 0 };
          const buttons = nav.querySelectorAll('button');
          return { exists: true, count: buttons.length };
        })()`,
        evaluate: (r: { exists: boolean; count: number }) =>
          r.exists && r.count > 0
            ? { passed: true, detail: `Found ${r.count} nav items` }
            : { passed: false, detail: 'Nav or nav items not found' },
      },
      {
        label: 'No console errors',
        code: `(() => { return { ok: true }; })()`,
        evaluate: () =>
          consoleErrors.filter(e => e.startsWith('[error]')).length === 0
            ? { passed: true, detail: 'No console errors detected' }
            : {
                passed: false,
                detail: `${consoleErrors.filter(e => e.startsWith('[error]')).length} console errors`,
              },
      },
    ]

    const results: Array<{ label: string; passed: boolean; detail: string }> = []
    for (const check of checks) {
      try {
        const raw = await mainWindow.webContents.executeJavaScript(check.code)
        const evaluation = check.evaluate(raw)
        results.push({ label: check.label, ...evaluation })
      } catch (err) {
        results.push({ label: check.label, passed: false, detail: `Error: ${String(err)}` })
      }
    }

    return { ok: true, results }
  })
}
