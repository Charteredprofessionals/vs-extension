# AI Dev Suite CLI

> Enterprise SDLC Operating System - Terminal Interface

The CLI brings the full power of AI Dev Suite to your terminal.

## Installation

### From Source

```bash
# Clone the repo
git clone https://github.com/Charteredprofessionals/vs-extension.git
cd vs-extension/cli

# Install dependencies
npm install

# Build
npm run build

# Link globally (optional)
npm link
```

### From npm (if published)

```bash
npm install -g ai-dev-suite
```

## Quick Start

```bash
# Initialize a new project
ai-dev-suite init my-project

# Start a new project with viability analysis
ai-dev-suite new "Build a task management app with real-time collaboration"

# Enter development mode
ai-dev-suite develop

# Create a feature
ai-dev-suite create "Add user authentication with JWT"

# Review code
ai-dev-suite review src/auth.ts

# Run tests
ai-dev-suite test

# Deploy
ai-dev-suite deploy
```

## Commands

| Command | Description |
|---------|-------------|
| `init [name]` | Initialize a new project |
| `new <idea>` | Start new project with viability analysis |
| `develop` | Enter development mode |
| `create <spec>` | Create a new feature |
| `review <file>` | Review code |
| `test` | Run tests |
| `status` | Show project status |
| `harden` | Run security & performance audits |
| `deploy` | Deploy to production |
| `ops` | Post-launch operations |
| `chat [agent]` | Chat with Architect/Developer/Designer |
| `config` | Manage configuration |

## Configuration

Create `ai-dev-suite.config.json` in your project root:

```json
{
  "providers": {
    "openrouter": {
      "enabled": true,
      "apiKey": "your-api-key"
    },
    "ollama": {
      "enabled": true,
      "endpoint": "http://localhost:11434"
    }
  },
  "agents": {
    "architect": { "model": "claude-3.5-sonnet" },
    "developer": { "model": "deepseek-coder-v2" },
    "designer": { "model": "gemini-pro-1.5-flash" }
  }
}
```

## Examples

### Viability Analysis

```bash
$ ai-dev-suite new "Build a healthcare app for elderly patients"

🔍 Running Viability Analysis...

# VIABILITY GATE ANALYSIS
## Recommendation: GO
## Score: 82/100

### Executive Summary
The idea shows strong market potential with clear differentiation...

[Full analysis...]

? Viability Decision: GO - Proceed to Charter
```

### Feature Creation

```bash
$ ai-dev-suite create "Add user authentication with JWT"

🔨 Creating feature...

✅ Feature created!

// auth.ts
import jwt from 'jsonwebtoken';

export function authenticate(req: Request, res: Response, next: Function) {
  const token = req.headers.authorization?.split(' ')[1];
  // ...
}
```

### Chat with Agents

```bash
$ ai-dev-suite chat architect

💬 Chatting with architect...

You: What's the best architecture for a real-time app?

Architect: For real-time applications, I recommend considering:
- WebSocket for bidirectional communication
- Event-driven architecture
- Consider Redis for pub/sub
- Load balancing strategy

[Would you like me to elaborate on any of these?]
```

## Workflow

```
ai-dev-suite new        → Viability Gate (Phase 0)
       ↓
ai-dev-suite generate  → Project Charter (Phase 1)
       ↓
ai-dev-suite develop   → Development (Phase 2)
       ↓
ai-dev-suite harden    → Hardening (Phase 3)
       ↓
ai-dev-suite deploy    → Launch (Phase 4)
       ↓
ai-dev-suite ops       → Post-Launch (Phase 5)
```

## Requirements

- Node.js 18+
- npm or yarn
- LLM provider (OpenRouter, Ollama, Anthropic, OpenAI, or Google)

---

For full documentation, see [README.md](../README.md)