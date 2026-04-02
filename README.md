# 🏗️ AI Dev Suite - Enterprise SDLC Operating System

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/VS%20Code-1.85+-brightgreen" alt="VS Code">
  <img src="https://img.shields.io/badge/License-MIT-orange" alt="License">
</p>

> **Transform VS Code into a unified enterprise-grade software development operating system** — from raw idea evaluation through business viability analysis, architecture, design, development, testing, deployment, and post-launch operations.

---

## 📦 Installation

### Prerequisites

Before installing, ensure you have:

- **VS Code** version 1.85.0 or higher
- **Node.js** version 18+ (for building from source)
- **Git** (for cloning the repository)
- **npm** or **yarn** (comes with Node.js)

### Option 1: Install Pre-built VSIX (Recommended)

1. **Download the VSIX:**
   - Go to [Releases](https://github.com/Charteredprofessionals/vs-extension/releases)
   - Download the latest `.vsix` file

2. **Install in VS Code:**
   - Open VS Code
   - Go to **Extensions** (`Ctrl+Shift+X`)
   - Click the **"..."** menu (top right)
   - Select **"Install from VSIX"**
   - Browse and select the downloaded `.vsix` file

3. **Restart VS Code** when prompted

---

### Option 2: Build from Source

If you want the latest development version:

```bash
# 1. Clone the repository
git clone https://github.com/Charteredprofessionals/vs-extension.git
cd vs-extension

# 2. Install dependencies
npm install

# 3. Compile TypeScript
npm run compile

# 4. Package the extension (generates .vsix)
npm run package

# 5. Install the generated .vsix
#    - Open VS Code → Extensions → "..." → "Install from VSIX"
#    - Select the .vsix file from the project root
```

---

### Option 3: Run in Development Mode

For active development on the extension:

```bash
# 1. Clone and setup
git clone https://github.com/Charteredprofessionals/vs-extension.git
cd vs-extension
npm install

# 2. Open in VS Code
code .

# 3. Press F5 to launch
#    This opens a new VS Code window with the extension loaded
#    Use this window to test the extension
```

---

## ⚙️ Configuration

### 1. Open Settings

- **Windows/Linux:** `Ctrl+,`
- **Mac:** `Cmd+,`

### 2. Search for "AI Dev Suite"

### 3. Configure LLM Provider

#### OpenRouter (Recommended - Free tier available)

```json
{
  "aiDevSuite.providers.openrouter.enabled": true,
  "aiDevSuite.providers.openrouter.apiKey": "your-openrouter-api-key",
  "aiDevSuite.providers.openrouter.defaultModel": "anthropic/claude-3.5-sonnet"
}
```

**Get OpenRouter API Key:**
1. Go to [openrouter.ai](https://openrouter.ai/)
2. Sign up and navigate to "Keys"
3. Create a new key and paste it above

#### Ollama (Local - Free, runs offline)

```json
{
  "aiDevSuite.providers.ollama.enabled": true,
  "aiDevSuite.providers.ollama.endpoint": "http://localhost:11434",
  "aiDevSuite.providers.ollama.defaultModel": "llama3.3"
}
```

**Install Ollama:**
1. Download from [ollama.com](https://ollama.com)
2. Run `ollama pull llama3.3` in terminal

#### Anthropic (Claude)

```json
{
  "aiDevSuite.providers.anthropic.enabled": true,
  "aiDevSuite.providers.anthropic.apiKey": "your-anthropic-api-key"
}
```

#### OpenAI (GPT)

```json
{
  "aiDevSuite.providers.openai.enabled": true,
  "aiDevSuite.providers.openai.apiKey": "your-openai-api-key"
}
```

#### Google Gemini

```json
{
  "aiDevSuite.providers.google.enabled": true,
  "aiDevSuite.providers.google.apiKey": "your-google-api-key"
}
```

### 4. Configure Agent Models (Optional)

```json
{
  "aiDevSuite.agents.architect.model": "anthropic/claude-3.5-sonnet",
  "aiDevSuite.agents.developer.model": "deepseek/deepseek-coder-v2",
  "aiDevSuite.agents.designer.model": "google/gemini-pro-1.5-flash"
}
```

### 5. UI Settings (Optional)

```json
{
  "aiDevSuite.ui.theme": "dark",
  "aiDevSuite.ui.panelPosition": "right"
}
```

---

## 🚀 Getting Started

### 1. Launch the Extension

- Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
- Type and select: **"AI Dev Suite: Start"**
- Or click the **AI Dev Suite** icon in the Activity Bar (left sidebar)

### 2. Start a New Project

1. Command Palette → **"AI Dev Suite: New Project"**
2. Describe your project idea when prompted
3. The system will run **Viability Analysis** (Phase 0)

### 3. Review Viability Analysis

The extension analyzes:
- Market potential (TAM, SAM, SOM)
- Technical feasibility
- Resource requirements
- Risk assessment

You'll get a **GO / NO-GO / PIVOT** recommendation with a score (0-100).

### 4. Approve to Continue

- **GO:** Proceed to Project Charter (Phase 1)
- **PIVOT:** Modify the idea based on analysis
- **NO-GO:** Start over with a new idea

### 5. Generate Project Charter

After approval, the system generates:
- `project-context.md` — Project-specific rules
- **PRD** — Product Requirements Document
- **System Design** — Architecture and components
- **Design System** — UI/UX specifications
- **Revenue Model** — Business model
- **ADRs** — Architecture Decision Records

### 6. Approve Charter

Review all documents and approve to begin development.

---

## 📋 Commands

| Command | Description |
|---------|-------------|
| `AI Dev Suite: Start` | Launch the extension |
| `AI Dev Suite: New Project` | Start a new project with viability analysis |
| `AI Dev Suite: Analyze Idea` | Run viability analysis on an idea |
| `AI Dev Suite: Chat with Architect` | Chat with the Chief Architect |
| `AI Dev Suite: Chat with Developer` | Chat with the Lead Developer |
| `AI Dev Suite: Chat with Designer` | Chat with the UI/UX Designer |
| `AI Dev Suite: Generate Docs` | Generate project documentation |
| `AI Dev Suite: Run Tests` | Run tests with agent analysis |
| `AI Dev Suite: Deploy` | Deploy the current project |
| `AI Dev Suite: Settings` | Open extension settings |

### Context Menu Commands

Select code in editor and right-click:

- **AI Dev Suite: Explain Code** — Get detailed explanation
- **AI Dev Suite: Refactor Code** — Improve code quality
- **AI Dev Suite: Add Tests** — Generate unit tests

---

## 🔄 Enterprise SDLC Workflow

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

| Phase | Description | Output |
|-------|-------------|--------|
| **Phase 0: Viability Gate** | Business viability analysis | GO/NO-GO/PIVOT recommendation |
| **Phase 1: Project Charter** | Generate all documentation | project-context.md, PRD, Architecture |
| **Phase 2: Development** | Implement features | Code, Tests, Reviews |
| **Phase 3: Hardening** | Security & performance | Security & Performance Reports |
| **Phase 4: Launch** | Deploy to production | Production Deployment |
| **Phase 5: Post-Launch** | Operations & monitoring | Monitoring, Incidents, Scaling |

---

## 🤖 Multi-Agent System

| Agent | Role | Capabilities |
|-------|------|-------------|
| 🏛️ **Chief Architect** | System Design | Viability analysis, architecture, security audits, performance |
| 💻 **Lead Developer** | Implementation | Code generation, review, refactoring, debugging, testing |
| 🎨 **UI/UX Designer** | Design | User experience, interface design, design systems |

---

## 🔌 Supported LLM Providers

| Provider | Free Tier | Features |
|----------|-----------|----------|
| **OpenRouter** | 1000/day | 100+ models |
| **Ollama** | Unlimited (local) | Run offline |
| **Anthropic** | Paid | Claude models |
| **OpenAI** | Paid | GPT models |
| **Google** | Paid | Gemini models |

---

## 📁 Project Structure

After creating a project:

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

1. Check VS Code version (must be 1.85+)
2. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"
3. Check for errors: `Ctrl+Shift+P` → "Developer: Toggle Developer Tools"

### API Key not working

1. Verify the key is correct in settings
2. Check the provider is enabled
3. Ensure you have credits/permissions for the provider

### Ollama not connecting

1. Make sure Ollama is running: `ollama serve`
2. Check the endpoint in settings (default: `http://localhost:11434`)
3. Pull a model: `ollama pull llama3.3`

### Commands not showing

1. Reload the extension: `Ctrl+Shift+P` → "Developer: Reload Window"
2. Check extension is enabled in Extensions panel

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License — see LICENSE file for details.

---

## 🆘 Support

- **Issues:** [GitHub Issues](https://github.com/Charteredprofessionals/vs-extension/issues)
- **Email:** support@aidevsuite.dev

---

<p align="center">
  <b>🏗️ Built with AI Dev Suite</b>
</p>