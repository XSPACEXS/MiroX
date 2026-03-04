import axios, { AxiosInstance } from 'axios'
import type { GitHubUser, GitHubRepo, GitHubFile, GitHubConnectionStatus } from '../types/github'
import type { ParsedContent } from '../types/import'

export class GitHubApiClient {
  private client: AxiosInstance

  constructor(token: string) {
    this.client = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      timeout: 15000,
    })
  }

  async testConnection(): Promise<GitHubConnectionStatus> {
    try {
      const { data } = await this.client.get<GitHubUser>('/user')
      return { ok: true, user: data }
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : 'Auth failed' }
    }
  }

  async listRepos(page = 1, perPage = 50): Promise<GitHubRepo[]> {
    const { data } = await this.client.get<GitHubRepo[]>('/user/repos', {
      params: { sort: 'updated', direction: 'desc', per_page: perPage, page },
    })
    return data
  }

  async getRepo(owner: string, repo: string): Promise<GitHubRepo> {
    const { data } = await this.client.get<GitHubRepo>(`/repos/${owner}/${repo}`)
    return data
  }

  async getFileContent(owner: string, repo: string, path: string): Promise<string | null> {
    try {
      const { data } = await this.client.get<GitHubFile>(`/repos/${owner}/${repo}/contents/${path}`)
      if (data.content && data.encoding === 'base64') {
        return atob(data.content.replace(/\n/g, ''))
      }
      return null
    } catch {
      return null
    }
  }

  async listFiles(owner: string, repo: string, path = ''): Promise<GitHubFile[]> {
    try {
      const { data } = await this.client.get<GitHubFile[]>(`/repos/${owner}/${repo}/contents/${path}`)
      return Array.isArray(data) ? data : [data]
    } catch {
      return []
    }
  }

  async analyzeRepo(owner: string, repo: string): Promise<ParsedContent> {
    // Fetch README
    const readme = await this.getFileContent(owner, repo, 'README.md')

    // Try to detect project type
    const [packageJson, cargoToml, goMod] = await Promise.all([
      this.getFileContent(owner, repo, 'package.json'),
      this.getFileContent(owner, repo, 'Cargo.toml'),
      this.getFileContent(owner, repo, 'go.mod'),
    ])

    await this.listFiles(owner, repo)

    // Determine project type and suggest template
    let suggestedTemplate = 'system-architecture'
    let confidence = 0.7
    const techStack: string[] = []

    if (packageJson) {
      try {
        const pkg = JSON.parse(packageJson)
        if (pkg.dependencies?.react || pkg.devDependencies?.react) techStack.push('React')
        if (pkg.dependencies?.next || pkg.devDependencies?.next) techStack.push('Next.js')
        if (pkg.dependencies?.express) techStack.push('Express')
        if (pkg.dependencies?.fastapi || pkg.dependencies?.django) techStack.push('Python API')
        suggestedTemplate = techStack.includes('Express') ? 'api-design' : 'system-architecture'
        confidence = 0.85
      } catch {
        // Ignore malformed package.json
      }
    }

    if (cargoToml) {
      techStack.push('Rust')
      suggestedTemplate = 'system-architecture'
      confidence = 0.8
    }

    if (goMod) {
      techStack.push('Go')
      suggestedTemplate = 'system-architecture'
      confidence = 0.8
    }

    const text = [readme || '', packageJson || '', cargoToml || '', goMod || ''].join('\n')

    // Keyword-based template suggestion
    if (/kanban|board|task|todo|sprint|backlog/i.test(text)) {
      suggestedTemplate = 'kanban-board'
      confidence = 0.75
    } else if (/api|endpoint|rest|graphql|swagger|openapi/i.test(text)) {
      suggestedTemplate = 'api-design'
      confidence = 0.8
    } else if (/business|plan|revenue|market|saas/i.test(text)) {
      suggestedTemplate = 'business-plan'
      confidence = 0.7
    } else if (/microservice|service mesh|docker|kubernetes|k8s/i.test(text)) {
      suggestedTemplate = 'microservices-map'
      confidence = 0.85
    } else if (/pipeline|ci|cd|deploy|github actions|gitlab/i.test(text)) {
      suggestedTemplate = 'deployment-pipeline'
      confidence = 0.8
    } else if (/database|schema|migration|sql|postgres|mongo/i.test(text)) {
      suggestedTemplate = 'database-design'
      confidence = 0.8
    }

    // Extract headings from README
    const headings = (readme || '').match(/^#{1,3} .+/gm)?.map(h => h.replace(/^#+\s/, '')) || []
    const repoData = await this.getRepo(owner, repo)

    return {
      rawText: text.slice(0, 5000),
      title: repoData.name,
      headings,
      keyPhrases: techStack,
      summary: repoData.description || `${owner}/${repo} repository`,
      fileType: 'code',
      detectedLanguage: repoData.language || 'Unknown',
      suggestedTemplate,
      confidence,
      extractedFields: {
        systemName: repoData.name,
        repoName: repoData.name,
        techStack: techStack.join(', '),
        description: repoData.description || '',
        apiName: repoData.name,
      },
    }
  }
}
