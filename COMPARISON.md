# AI Dev Suite vs Claude Code - Feature Comparison

## Overview

| Aspect | AI Dev Suite | Claude Code |
|--------|--------------|-------------|
| **Type** | VS Code Extension | Multi-platform (Terminal, VS Code, Desktop, Web, JetBrains) |
| **Core Focus** | Enterprise SDLC + Business Viability | General-purpose AI coding assistant |
| **License** | Open Source (MIT) | Proprietary (Anthropic) |
| **LLM Providers** | Multi-provider (OpenRouter, Ollama, Anthropic, OpenAI, Google) | Anthropic (with third-party support) |

---

## Feature Comparison

### 🏗️ Enterprise SDLC Workflow

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **Viability Analysis** | ✅ Phase 0: Market, technical, revenue analysis | ❌ Not built-in |
| **Project Charter** | ✅ Generates PRD, architecture, design system | ❌ Via CLAUDE.md (manual) |
| **Phase Gates** | ✅ GO/NO-GO/PIVOT decision workflow | ❌ Not structured |
| **Multi-Agent Team** | ✅ Architect, Developer, Designer agents | ✅ Sub-agents support |
| **Post-Launch Ops** | ✅ Monitoring, incident response, scaling | ❌ Basic (scheduled tasks) |

### 🤖 Agent System

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **Specialized Agents** | 3 distinct (Architect, Developer, Designer) | Sub-agents (general) |
| **Agent Personas** | Built-in with specific roles | Custom via instructions |
| **Context Awareness** | Project-specific via project-context.md | CLAUDE.md + auto-memory |
| **Multi-Agent Coordination** | ✅ Workflow orchestrator | ✅ Agent teams |

### 🔌 LLM Provider Support

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **OpenRouter** | ✅ Multiple models | ❌ |
| **Ollama (Local)** | ✅ Offline capable | ❌ (uses Anthropic) |
| **Anthropic Claude** | ✅ | ✅ (native) |
| **OpenAI GPT** | ✅ | ⚠️ Third-party |
| **Google Gemini** | ✅ | ❌ |
| **Custom/Other** | ✅ via local-custom | ⚠️ Third-party |

### 💻 IDE Integration

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **VS Code** | ✅ Native extension | ✅ Extension |
| **Terminal CLI** | ❌ | ✅ Full-featured |
| **Desktop App** | ❌ | ✅ |
| **Web** | ❌ | ✅ |
| **JetBrains** | ❌ | ✅ |
| **Cursor** | ❌ | ✅ |

### 🔧 Development Features

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **Code Generation** | ✅ Project-aware | ✅ |
| **Code Review** | ✅ Dedicated workflow | ✅ |
| **Refactoring** | ✅ | ✅ |
| **Debugging** | ✅ Agent-assisted | ✅ |
| **Test Generation** | ✅ | ✅ |
| **File Operations** | ✅ | ✅ |
| **Git Integration** | Basic | ✅ Full (commits, PRs) |
| **MCP Support** | ❌ Not yet | ✅ Full |

### 📋 Project Management

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **Task Tracking** | ✅ task.md | ❌ (external tools) |
| **Documentation** | ✅ Auto-generated | ⚠️ Manual via CLAUDE.md |
| **Workflows** | ✅ /create, /review, /sdlc, /kickoff | Commands/skills |
| **Scheduled Tasks** | ❌ | ✅ Cloud + Desktop |

### 🔐 Security & Enterprise

| Feature | AI Dev Suite | Claude Code |
|---------|--------------|-------------|
| **Local Models** | ✅ Ollama (offline) | ❌ Requires API |
| **Self-Hosted** | ✅ via Ollama | ❌ Cloud only |
| **Enterprise Features** | Viability gates, compliance docs | API access, audit logs |

---

## When to Use Which

### Choose AI Dev Suite When:

- ✅ You need **business viability analysis** before coding
- ✅ You want **enterprise SDLC** with phase gates
- ✅ You prefer **local/offline** LLMs (Ollama)
- ✅ You need **multi-provider** flexibility
- ✅ You want **open source** and self-hosting
- ✅ You need **project charter** automation
- ✅ You're building **enterprise applications**

### Choose Claude Code When:

- ✅ You want **general-purpose** coding assistant
- ✅ You need **multi-platform** (Terminal, Web, Desktop)
- ✅ You want **MCP integrations** (Jira, Slack, etc.)
- ✅ You prefer **mature, production-tested** tool
- ✅ You have **Anthropic subscription**
- ✅ You need **GitHub/GitLab automation**
- ✅ You want **remote control** features

---

## Pricing

| Aspect | AI Dev Suite | Claude Code |
|--------|--------------|-------------|
| **Core** | Free (open source) | Free tier (limited) |
| **API Costs** | Pay per provider | Pay Anthropic |
| **Local Models** | Free (Ollama) | Not available |
| **Pro Features** | Free | Paid subscription |

---

## Summary

**AI Dev Suite** is purpose-built for **enterprise software development** with a focus on:
- Business viability before coding
- Structured SDLC with phase gates
- Multi-provider LLM flexibility
- Local/offline capability
- Open source transparency

**Claude Code** is a general-purpose **AI coding assistant** with:
- Multi-platform support
- MCP ecosystem
- GitHub/GitLab integration
- Remote control features
- Production maturity

They solve different problems — AI Dev Suite for **enterprise SDLC governance**, Claude Code for **day-to-day coding assistance**.

---

*Comparison generated: April 2026*