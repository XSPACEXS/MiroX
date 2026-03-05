const isDev = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.DEV : true

/* eslint-disable no-console -- Logger is the designated console wrapper for the app */
export const logger = {
  error: (...args: unknown[]): void => { console.error('[MiroX]', ...args) },
  warn: (...args: unknown[]): void => { if (isDev) console.warn('[MiroX]', ...args) },
  info: (...args: unknown[]): void => { if (isDev) console.info('[MiroX]', ...args) },
}
/* eslint-enable no-console */
