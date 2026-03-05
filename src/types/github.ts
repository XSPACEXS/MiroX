export interface GitHubUser {
  id: number
  login: string
  name: string
  avatar_url: string
  bio?: string
  public_repos: number
  html_url: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  default_branch: string
  owner: {
    login: string
    avatar_url: string
  }
  topics: string[]
  private: boolean
}
