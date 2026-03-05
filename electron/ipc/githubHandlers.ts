import { ipcMain } from 'electron'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'

const SERVICE = 'com.mirox.app'
const ACCOUNT_GITHUB = 'github-token'
const GITHUB_BASE_URL = 'https://api.github.com'

// GitHub usernames/repo names: alphanumeric, hyphens, underscores, dots
const GITHUB_NAME_RE = /^[a-zA-Z0-9._-]+$/

async function getGithubToken(): Promise<string | null> {
  try {
    return await keytar.getPassword(SERVICE, ACCOUNT_GITHUB)
  } catch {
    return null
  }
}

async function githubRequest(token: string, path: string): Promise<Record<string, unknown> | Record<string, unknown>[]> {
  const response = await fetchWithTimeout(`${GITHUB_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'MiroX/1.0',
    },
  })
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`GitHub API error ${response.status}: ${error}`)
  }
  return response.json()
}

export function registerGithubHandlers(): void {
  // Get token (masked)
  ipcMain.removeHandler(IPC_CHANNELS.GITHUB_GET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.GITHUB_GET_TOKEN, async () => {
    const token = await getGithubToken()
    if (!token) return { ok: true, hasToken: false, masked: '' }
    const masked = token.length > 8 ? '...' + token.slice(-8) : token
    return { ok: true, hasToken: true, masked }
  })

  // Set token
  ipcMain.removeHandler(IPC_CHANNELS.GITHUB_SET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.GITHUB_SET_TOKEN, async (_event, token: string) => {
    if (typeof token !== 'string' || !token.trim()) {
      return { ok: false, error: 'Token is required' }
    }
    if (token.length > 1000) {
      return { ok: false, error: 'Token too long' }
    }
    try {
      await keytar.setPassword(SERVICE, ACCOUNT_GITHUB, token)
      return { ok: true }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Test connection
  ipcMain.removeHandler(IPC_CHANNELS.GITHUB_TEST_CONNECTION)
  ipcMain.handle(IPC_CHANNELS.GITHUB_TEST_CONNECTION, async () => {
    try {
      const token = await getGithubToken()
      if (!token) return { ok: false, error: 'No GitHub token configured' }

      const data = await githubRequest(token, '/user')
      if (!data || typeof (data as Record<string, unknown>).login !== 'string') {
        return { ok: false, error: 'Unexpected API response' }
      }
      const user = data as {
        login: string
        avatar_url: string
        name: string | null
      }

      return {
        ok: true,
        user: {
          login: user.login,
          avatarUrl: user.avatar_url,
          name: user.name,
        },
      }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // List repos
  ipcMain.removeHandler(IPC_CHANNELS.GITHUB_LIST_REPOS)
  ipcMain.handle(IPC_CHANNELS.GITHUB_LIST_REPOS, async () => {
    try {
      const token = await getGithubToken()
      if (!token) return { ok: false, error: 'No GitHub token configured' }

      const rawRepos = await githubRequest(token, '/user/repos?sort=updated&per_page=50')
      if (!Array.isArray(rawRepos)) {
        return { ok: false, error: 'Unexpected API response — expected array of repos' }
      }
      const repos = rawRepos as Array<{
        id: number
        name: string
        full_name: string
        description: string | null
        language: string | null
        stargazers_count: number
        updated_at: string
        html_url: string
        default_branch: string
        topics: string[]
        private: boolean
        owner: { login: string; avatar_url: string }
      }>

      return {
        ok: true,
        repos: repos.map((r) => ({
          id: r.id,
          name: r.name,
          fullName: r.full_name,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          updatedAt: r.updated_at,
          url: r.html_url,
          defaultBranch: r.default_branch,
          topics: r.topics || [],
          isPrivate: r.private,
          owner: {
            login: r.owner.login,
            avatarUrl: r.owner.avatar_url,
          },
        })),
      }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Analyze repo
  ipcMain.removeHandler(IPC_CHANNELS.GITHUB_ANALYZE_REPO)
  ipcMain.handle(IPC_CHANNELS.GITHUB_ANALYZE_REPO, async (_event, owner: string, repo: string) => {
    if (typeof owner !== 'string' || !owner.trim()) {
      return { ok: false, error: 'Repository owner is required' }
    }
    if (typeof repo !== 'string' || !repo.trim()) {
      return { ok: false, error: 'Repository name is required' }
    }
    if (owner.length > 39) {
      return { ok: false, error: 'Repository owner too long' }
    }
    if (repo.length > 100) {
      return { ok: false, error: 'Repository name too long' }
    }
    if (!GITHUB_NAME_RE.test(owner)) {
      return { ok: false, error: 'Invalid repository owner' }
    }
    if (!GITHUB_NAME_RE.test(repo)) {
      return { ok: false, error: 'Invalid repository name' }
    }
    try {
      const token = await getGithubToken()
      if (!token) return { ok: false, error: 'No GitHub token configured' }

      // Fetch repo info
      const rawRepoInfo = await githubRequest(token, `/repos/${owner}/${repo}`)
      if (!rawRepoInfo || typeof rawRepoInfo !== 'object' || !('name' in rawRepoInfo)) {
        return { ok: false, error: 'Unexpected API response — invalid repo data' }
      }
      const repoInfo = rawRepoInfo as {
        name: string
        description: string | null
        language: string | null
        topics: string[]
        default_branch: string
      }

      // Try to fetch README
      let readme = ''
      try {
        const readmeData = (await githubRequest(
          token,
          `/repos/${owner}/${repo}/readme`
        )) as { content: string; encoding: string }
        if (readmeData.encoding === 'base64') {
          readme = Buffer.from(readmeData.content, 'base64').toString('utf-8')
        }
      } catch {
        // README not found — that's fine
      }

      // Try to detect project type by checking for common config files
      let projectType = 'unknown'
      const configChecks: Array<{ file: string; type: string }> = [
        { file: 'package.json', type: 'javascript' },
        { file: 'Cargo.toml', type: 'rust' },
        { file: 'go.mod', type: 'go' },
        { file: 'requirements.txt', type: 'python' },
        { file: 'pyproject.toml', type: 'python' },
        { file: 'pom.xml', type: 'java' },
        { file: 'build.gradle', type: 'java' },
      ]

      for (const check of configChecks) {
        try {
          await githubRequest(token, `/repos/${owner}/${repo}/contents/${check.file}`)
          projectType = check.type
          break
        } catch {
          // File doesn't exist, try next
        }
      }

      // Suggest template based on project type and topics
      let suggestedTemplate = 'system-architecture'
      if (repoInfo.topics?.includes('api') || repoInfo.topics?.includes('rest')) {
        suggestedTemplate = 'api-design'
      } else if (repoInfo.topics?.includes('database') || repoInfo.topics?.includes('db')) {
        suggestedTemplate = 'database-design'
      } else if (repoInfo.topics?.includes('microservices')) {
        suggestedTemplate = 'microservices-architecture'
      }

      return {
        ok: true,
        analysis: {
          name: repoInfo.name,
          description: repoInfo.description,
          language: repoInfo.language,
          topics: repoInfo.topics,
          defaultBranch: repoInfo.default_branch,
          projectType,
          readme: readme.slice(0, 5000), // Truncate long READMEs
          suggestedTemplate,
        },
      }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })
}
