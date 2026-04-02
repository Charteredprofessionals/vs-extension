# 🏗️ AI Dev Suite - Enterprise SDLC Operating System

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/Git-Full%20Integration-orange" alt="Git">
  <img src="https://img.shields.io/badge/MCP-Open--Source-green" alt="MCP">
  <img src="https://img.shields.io/badge/License-MIT-orange" alt="License">
</p>

> **Transform VS Code or your terminal into a unified enterprise-grade software development operating system** — from raw idea evaluation through business viability analysis, architecture, design, development, testing, deployment, and post-launch operations.

---

## 📦 Installation

### Prerequisites

- **VS Code** 1.85+ (for extension)
- **Node.js** 18+ (for CLI)
- **Git** (for version control)
- **npm** (for building)

### VS Code Extension

```bash
# Clone and build
git clone https://github.com/Charteredprofessionals/vs-extension.git
cd vs-extension
npm install
npm run package

# Install in VS Code:
# Extensions → "..." → "Install from VSIX" → select .vsix file
```

### Terminal CLI

```bash
# Navigate to CLI, build, and link
cd vs-extension/cli
npm install
npm run build
npm link  # Enables 'ai-dev-suite' command globally
```

---

## 🚀 Quick Start

### VS Code Extension

1. Install extension
2. `Ctrl+Shift+P` → **AI Dev Suite: Start**
3. Configure LLM provider in settings
4. Describe your idea — viability analysis runs automatically

### Terminal CLI

```bash
# Initialize project
ai-dev-suite init my-app

# Start with viability analysis
ai-dev-suite new "Build a task management app with real-time collaboration"

# Chat with the Architect
ai-dev-suite chat architect
```

---

## 🔧 Configuration

### LLM Providers

Configure in `ai-dev-suite.config.json` or VS Code settings:

```json
{
  "providers": {
    "openrouter": {
      "enabled": true,
      "apiKey": "your-key",
      "defaultModel": "anthropic/claude-3.5-sonnet"
    },
    "ollama": {
      "enabled": true,
      "endpoint": "http://localhost:11434",
      "defaultModel": "llama3.3"
    }
  }
}
```

### MCP Servers

Full support for open-source MCP servers:

```bash
# List available MCP servers
ai-dev-suite mcp

# Configure in ai-dev-suite.config.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    },
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}" }
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "./project.db"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost:5432"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@mcp/sequential-thinking"]
    }
  }
}
```

---

## 🔄 Enterprise SDLC Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ENTERPRISE SDLC OPERATING SYSTEM                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  IDEA → VIABILITY GATE → PROJECT CHARTER → DEVELOPMENT → HARDENING         │
│           GO/NO-GO        Approval         Quality Gates                    │
│                                                                             │
│  LAUNCH → POST-LAUNCH                                                       │
│  Deploy   Operations                                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Phase | Description | Output |
|-------|-------------|--------|
| **0: Viability Gate** | Market, technical, revenue analysis | GO/NO-GO/PIVOT |
| **1: Project Charter** | PRD, architecture, design system | project-context.md |
| **2: Development** | Feature creation, code review | Code, tests |
| **3: Hardening** | Security & performance audits | Audit reports |
| **4: Launch** | CI/CD, staged rollout | Production |
| **5: Post-Launch** | Monitoring, incident response | Operations playbook |

---

## 🤖 Multi-Agent System

| Agent | Role | Capabilities |
|-------|------|-------------|
| 🏛️ **Chief Architect** | System Design | Viability, architecture, security, performance |
| 💻 **Lead Developer** | Implementation | Code generation, review, refactoring, debugging |
| 🎨 **UI/UX Designer** | Design | UX, interface design, design systems |

---

## 📋 Commands

### VS Code Extension

| Command | Description |
|---------|-------------|
| `AI Dev Suite: Start` | Launch extension |
| `AI Dev Suite: New Project` | Start with viability analysis |
| `AI Dev Suite: Chat with Architect` | System design |
| `AI Dev Suite: Chat with Developer` | Implementation help |
| `AI Dev Suite: Chat with Designer` | Design assistance |

### Terminal CLI

| Command | Description |
|---------|-------------|
| `ai-dev-suite init [name]` | Initialize project |
| `ai-dev-suite new <idea>` | Viability analysis |
| `ai-dev-suite develop` | Development mode |
| `ai-dev-suite create <spec>` | Create feature |
| `ai-dev-suite review <file>` | Code review |
| `ai-dev-suite test` | Run tests |
| `ai-dev-suite harden` | Security + performance |
| `ai-dev-suite deploy` | Deploy to production |
| `ai-dev-suite ops` | Post-launch operations |
| `ai-dev-suite chat [agent]` | Chat with agents |

---

## 🔀 Git Integration

Full Git operations built into the CLI:

```bash
# Status & Log
ai-dev-suite git status
ai-dev-suite git log -n 10
ai-dev-suite git diff --staged

# Commits & Branches
ai-dev-suite git commit -m "feat: add auth"
ai-dev-suite git branch create feature/user-auth
ai-dev-suite git checkout feature/user-auth
ai-dev-suite git push
ai-dev-suite git pull

# Pull Requests
ai-dev-suite git pr create -t "Add authentication"
ai-dev-suite git pr list
ai-dev-suite git pr merge 42

# Advanced
ai-dev-suite git stash push -m "WIP"
ai-dev-suite git merge feature/user-auth
ai-dev-suite git rebase main
```

---

## 🔌 Supported LLM Providers

| Provider | Free Tier | Features |
|----------|-----------|----------|
| **OpenRouter** | 1000/day | 100+ models |
| **Ollama** | Unlimited | Local/offline |
| **Anthropic** | Paid | Claude models |
| **OpenAI** | Paid | GPT models |
| **Google** | Paid | Gemini models |

---

## 🔌 MCP Servers (Open-Source)

| Server | Description | Cost |
|--------|-------------|------|
| filesystem | File operations | Free |
| git | Git operations | Free |
| github | GitHub API (needs token) | Free |
| fetch | Web content fetching | Free |
| sqlite | SQLite database | Free |
| postgres | PostgreSQL database | Free |
| sequential-thinking | Advanced reasoning | Free |
| puppeteer | Browser automation | Free |

---

## 📁 Project Structure

```
your-project/
├── project-context.md     # Project rules & context
├── task.md                # Development task tracking
├── viability-report.md    # Phase 0 analysis
├── charter/               # Phase 1 documents
│   ├── prd.md
│   ├── architecture.md
│   └── design-system.md
├── deployment/            # Phase 4 configs
├── operations/           # Phase 5 playbooks
└── src/                  # Your code
```

---

## 🔧 Troubleshooting

### Extension not loading
- Check VS Code version (must be 1.85+)
- Reload: `Ctrl+Shift+P` → "Developer: Reload Window"

### Ollama not connecting
- Run: `ollama serve`
- Check endpoint in settings (default: `http://localhost:11434`)

### Git PR commands fail
- Ensure `gh` CLI is installed and authenticated: `gh auth login`

---

## 🤝 Contributing

Contributions welcome! Read our guidelines before submitting PRs.

## 📄 License

MIT License — see LICENSE file for details.

---

<p align="center">
  <b>🏗️ Built with AI Dev Suite</b>
</p>