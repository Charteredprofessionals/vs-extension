# 🏗️ AI Dev Suite - Enterprise SDLC Operating System

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/VS%20Code-1.85+-brightgreen" alt="VS Code">
  <img src="https://img.shields.io/badge/License-MIT-orange" alt="License">
</p>

> **Transform VS Code into a unified enterprise-grade software development operating system** — from raw idea evaluation through business viability analysis, architecture, design, development, testing, deployment, and post-launch operations.

## ✨ Enterprise-Grade Features

### 🔄 Complete SDLC Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ENTERPRISE SDLC OPERATING SYSTEM                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  IDEA ──▶ VIABILITY GATE ──▶ PROJECT CHARTER ──▶ DEVELOPMENT ──▶ HARDENING │
│                    │                    │                    │              │
│                 GO/NO-GO            Approval           Quality             │
│                                    Charter            Gates                 │
│                                                                             │
│  LAUNCH ──▶ POST-LAUNCH                                                     │
│     │           │                                                            │
│  Deploy      Operations                                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Phase | Gate | Output |
|-------|------|--------|
| **Phase 0** | Viability Gate | GO/NO-GO/PIVOT with score |
| **Phase 1** | Charter Approval | project-context.md, PRD, Architecture |
| **Phase 2** | Quality Gates | Features, Tests, Reviews |
| **Phase 3** | Security Audit | Security & Performance Reports |
| **Phase 4** | Release Approval | Production Deployment |
| **Phase 5** | Operations | Monitoring, Incidents, Scaling |

### 🤖 Multi-Agent AI Team

| Agent | Role | Capabilities |
|-------|------|--------------|
| 🏛️ **Chief Architect** | System Design | Viability analysis, architecture, security audits, performance |
| 💻 **Lead Developer** | Implementation | Code generation, review, refactoring, debugging, testing |
| 🎨 **UI/UX Designer** | Design | User experience, interface design, design systems |

### 🔌 Multi-Provider LLM Support

- **OpenRouter** — 100+ models, free tier available
- **Ollama** — Local models (llama3.3, codellama, qwen2.5)
- **Agent Router** — Custom routing
- **Anthropic, OpenAI, Google Gemini** — API providers
- **More coming soon...**

---

## 🚀 Quick Start

### 1. Install & Configure

1. Install from VS Code Marketplace
2. Configure your LLM provider in settings:

```json
{
  "aiDevSuite.providers.openrouter.apiKey": "your-key",
  "aiDevSuite.providers.openrouter.enabled": true
}
```

### 2. Start New Project

```
Command Palette → AI Dev Suite: New Project
```

### 3. Present Your Idea

The system automatically runs viability analysis before any code is written.

---

## 💡 How It Works

### Phase 0: Viability Gate 🔍

When you present an idea, the system evaluates:

- **Market Analysis** — TAM, SAM, SOM, trends
- **Competitive Landscape** — Direct/indirect competitors
- **Revenue Validation** — Unit economics, pricing
- **Technical Feasibility** — Complexity, risks
- **Resource Requirements** — Timeline, team, budget

**Output:** GO / NO-GO / PIVOT with score (0-100)

### Phase 1: Project Charter 📋

After viability approval, generates:

- `project-context.md` — Project-specific rules and context
- **PRD** — User stories, functional requirements
- **System Design** — Architecture, components, API
- **Design System** — Tokens, components, patterns
- **Revenue Model** — Pricing, projections
- **ADRs** — Architecture decisions

### Phase 2: Development 💻

- `/create` — Feature creation workflow
- `/review` — Code review workflow
- Task tracking in `task.md`
- Project context-aware code generation

### Phase 3: Hardening 🛡️

- Security audit (OWASP)
- Performance audit
- Final code review

### Phase 4: Launch 🚀

- CI/CD pipeline
- Staged rollout (canary/blue-green)
- Documentation

### Phase 5: Post-Launch 📊

- Monitoring setup
- Incident response playbook
- Scaling playbook
- Compliance (SOC2, GDPR)

---

## 📁 Project Structure

```
your-project/
├── project-context.md     # Project rules & context
├── task.md                 # Development task tracking
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

## ⚙️ Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `providers.openrouter.apiKey` | - | OpenRouter API key |
| `providers.openrouter.defaultModel` | claude-3.5-sonnet | Default model |
| `providers.ollama.enabled` | true | Enable local models |
| `agents.architect.model` | claude-3.5-sonnet | Architect model |
| `agents.developer.model` | deepseek-coder-v2 | Developer model |
| `agents.designer.model` | gemini-pro-1.5-flash | Designer model |
| `routing.strategy` | auto | LLM routing strategy |

---

## 🔐 Free API Keys

| Provider | Free Tier | Link |
|----------|-----------|------|
| **OpenRouter** | 1000/day | [Get Key](https://openrouter.ai/keys) |
| **Ollama** | Unlimited (local) | [Download](https://ollama.com) |
| **Groq** | Free tier | [Get Key](https://console.groq.com) |

---

## 🤝 Contributing

Issues and PRs welcome!

## 📄 License

MIT

---

<p align="center">
  <b>🏗️ Built with AI Dev Suite</b>
</p>