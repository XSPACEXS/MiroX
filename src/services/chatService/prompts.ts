export function buildChatPrompt(userMessage: string, projectDir: string | null): string {
  const ctx = projectDir ? `The project is at: ${projectDir}` : 'No project directory is set.'
  return `You are a codebase expert assistant. ${ctx}

Answer the user's question about the project. Use Read, Glob, and Grep to explore the codebase as needed.
Be concise and direct. When referencing code, include file paths and line numbers.

User's question:
${userMessage}`
}

export function buildDebugPrompt(errorText: string, projectDir: string | null): string {
  const ctx = projectDir ? `The project is at: ${projectDir}` : 'No project directory is set.'
  return `You are a debugging expert. ${ctx}

Trace the root cause of this error in the codebase. Use Read, Glob, and Grep to investigate.

After analysis, output a JSON block (wrapped in \`\`\`json ... \`\`\`) with this shape:
{
  "rootCause": "explanation of the root cause",
  "affectedFiles": ["file1.ts", "file2.ts"],
  "suggestedFix": "description of the fix",
  "diffPreview": "optional diff showing the fix"
}

Error to investigate:
${errorText}`
}

export function buildScanPrompt(projectDir: string | null): string {
  const ctx = projectDir ? `The project is at: ${projectDir}` : 'No project directory is set.'
  return `You are a project health analyzer. ${ctx}

Analyze this project for quality, security, performance, and best practices.
Use Read, Glob, and Grep to explore the codebase. Check for:
- TypeScript errors (run typecheck if possible)
- Test coverage gaps
- Security vulnerabilities (OWASP top 10)
- Performance issues
- Code quality and architecture

After analysis, output a JSON block (wrapped in \`\`\`json ... \`\`\`) with this shape:
{
  "overallScore": 85,
  "categories": [
    {
      "name": "Type Safety",
      "score": 90,
      "issues": [
        { "severity": "warning", "message": "description", "file": "src/example.ts", "fixPrompt": "Fix the type error in..." }
      ]
    }
  ],
  "strengths": ["Good test coverage", "Clean architecture"]
}

Be thorough but concise. Focus on actionable findings.`
}
