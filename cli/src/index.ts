#!/usr/bin/env node

/**
 * AI Dev Suite CLI
 * Enterprise SDLC Operating System - Terminal Interface
 */

import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { LLMRouter, createLLMRouter } from '../llm/router.js';
import { SDLCOrchestrator } from '../workflows/sdlc-orchestrator.js';
import { ArchitectAgent } from '../agents/architect.js';
import { DeveloperAgent } from '../agents/developer.js';
import { DesignerAgent } from '../agents/designer.js';
import { executeKickoff } from '../workflows/kickoff.js';
import * as fs from 'fs';
import * as path from 'path';

// Version
const VERSION = '1.0.0';

// Global state
let config: any = {};
let llmRouter: LLMRouter | null = null;
let orchestrator: SDLCOrchestrator | null = null;

// Load config
function loadConfig(): any {
  const configPath = path.join(process.cwd(), 'ai-dev-suite.config.json');
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  // Default config
  return {
    providers: {
      openrouter: { enabled: false, apiKey: '' },
      ollama: { enabled: true, endpoint: 'http://localhost:11434' }
    },
    agents: {
      architect: { model: 'claude-3.5-sonnet' },
      developer: { model: 'deepseek-coder-v2' },
      designer: { model: 'gemini-pro-1.5-flash' }
    }
  };
}

// Initialize
function initialize() {
  config = loadConfig();
  llmRouter = createLLMRouter(config);
  orchestrator = new SDLCOrchestrator(llmRouter);
}

// CLI Program
const program = new Command();

program
  .name('ai-dev-suite')
  .description('🏗️ Enterprise SDLC Operating System - AI-powered development team')
  .version(VERSION);

// ========================================
// COMMANDS
// ========================================

// init - Initialize a new project
program
  .command('init')
  .description('Initialize a new AI Dev Suite project')
  .argument('[name]', 'Project name')
  .action(async (name) => {
    initialize();
    
    const projectName = name || await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: 'my-project'
      }
    ]).then(r => r.name);

    console.log(chalk.blue(`\n🚀 Initializing project: ${projectName}\n`));
    
    // Run kickoff
    const result = await executeKickoff({
      projectRoot: process.cwd(),
      projectName,
      techStack: { backend: 'Node.js', frontend: 'React' },
      includeDocker: true,
      includeCI: true
    });
    
    console.log(chalk.green('\n✅ Project initialized!\n'));
    console.log(result);
  });

// new - Start a new project with viability analysis
program
  .command('new')
  .description('Start a new project with viability analysis')
  .argument('<idea>', 'Project idea description')
  .option('-y, --yes', 'Skip confirmation')
  .action(async (idea, options) => {
    initialize();
    
    console.log(chalk.blue('\n🔍 Running Viability Analysis...\n'));
    
    // Phase 0: Viability Gate
    const project = await orchestrator!.evaluateViability(idea);
    const report = orchestrator!.getViabilityReport();
    
    console.log(report);
    
    if (!options.yes) {
      const { decision } = await inquirer.prompt([
        {
          type: 'list',
          name: 'decision',
          message: '\nViability Decision:',
          choices: ['GO - Proceed to Charter', 'PIVOT - Modify the idea', 'NO-GO - Start over']
        }
      ]);
      
      if (decision.startsWith('NO-GO')) {
        console.log(chalk.red('\n❌ Project did not pass viability gate. Try a different idea.\n'));
        process.exit(1);
      }
    }
    
    // Phase 1: Project Charter
    console.log(chalk.blue('\n📋 Generating Project Charter...\n'));
    await orchestrator!.generateProjectCharter();
    const charter = orchestrator!.getCharterDocuments();
    
    console.log(chalk.green('\n✅ Project Charter generated!\n'));
    
    if (!options.yes) {
      const { approved } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'approved',
          message: 'Approve Charter and proceed to Development?',
          default: true
        }
      ]);
      
      if (!approved) {
        console.log(chalk.yellow('\n⚠️ Charter not approved. Modify and try again.\n'));
        process.exit(1);
      }
    }
    
    console.log(chalk.green('\n🎉 Project ready for development!\n'));
    console.log(chalk.blue('Next: ai-dev-suite develop\n'));
  });

// develop - Enter development mode
program
  .command('develop')
  .description('Enter development mode')
  .action(async () => {
    initialize();
    
    console.log(chalk.blue('\n💻 Entering Development Mode\n'));
    console.log('Commands available:');
    console.log('  create <spec>  - Create a new feature');
    console.log('  review <file> - Review code');
    console.log('  test          - Run tests');
    console.log('  status        - Show development status');
    console.log('');
    
    await orchestrator!.startDevelopment();
    
    const { cmd } = await inquirer.prompt([
      {
        type: 'list',
        name: 'cmd',
        message: 'What would you like to do?',
        choices: [
          'Create a feature',
          'Review code',
          'Run tests',
          'View status',
          'Exit'
        ]
      }
    ]);
    
    if (cmd === 'Exit') {
      console.log(chalk.blue('\n👋 Goodbye!\n'));
      process.exit(0);
    }
  });

// create - Create a new feature
program
  .command('create')
  .description('Create a new feature')
  .argument('<spec>', 'Feature specification')
  .action(async (spec) => {
    initialize();
    
    console.log(chalk.blue('\n🔨 Creating feature...\n'));
    
    const code = await orchestrator!.createFeature(spec);
    
    console.log(chalk.green('\n✅ Feature created!\n'));
    console.log(code);
  });

// review - Review code
program
  .command('review')
  .description('Review code')
  .argument('<file>', 'File to review')
  .action(async (file) => {
    initialize();
    
    if (!fs.existsSync(file)) {
      console.log(chalk.red(`\n❌ File not found: ${file}\n`));
      process.exit(1);
    }
    
    const code = fs.readFileSync(file, 'utf-8');
    
    console.log(chalk.blue(`\n🔍 Reviewing: ${file}\n`));
    
    const review = await orchestrator!.reviewFeature(code);
    
    console.log(chalk.green('\n✅ Review complete!\n'));
    console.log(review.summary);
    
    if (review.issues.length > 0) {
      console.log(chalk.yellow('\n⚠️ Issues found:'));
      review.issues.forEach(issue => {
        console.log(`  [${issue.severity}] ${issue.description}`);
      });
    }
  });

// test - Run tests
program
  .command('test')
  .description('Run tests with agent analysis')
  .action(async () => {
    initialize();
    
    console.log(chalk.blue('\n🧪 Running tests...\n'));
    
    await orchestrator!.runTests();
    
    console.log(chalk.green('\n✅ Tests passed!\n'));
  });

// status - Show project status
program
  .command('status')
  .description('Show project status')
  .action(async () => {
    initialize();
    
    const state = orchestrator!.getWorkflowState();
    console.log(chalk.blue('\n📊 Project Status\n'));
    console.log(state);
  });

// harden - Run hardening (security & performance)
program
  .command('harden')
  .description('Run hardening phase (security & performance audits)')
  .action(async () => {
    initialize();
    
    console.log(chalk.blue('\n🛡️ Running Hardening Phase...\n'));
    
    await orchestrator!.startHardening();
    
    console.log(chalk.blue('Running security audit...'));
    const security = await orchestrator!.runSecurityAudit();
    console.log(chalk.green(`Security score: ${security.overallScore}/100`));
    
    console.log(chalk.blue('Running performance audit...'));
    const performance = await orchestrator!.runPerformanceAudit();
    console.log(chalk.green(`Performance score: ${performance.overallScore}/100`));
    
    console.log(chalk.green('\n✅ Hardening complete!\n'));
  });

// deploy - Deploy to production
program
  .command('deploy')
  .description('Deploy to production')
  .option('-s, --strategy', 'Deployment strategy', 'canary')
  .action(async (options) => {
    initialize();
    
    console.log(chalk.blue('\n🚀 Starting Deployment...\n'));
    
    await orchestrator!.startLaunch();
    await orchestrator!.generateDeploymentConfig(options.strategy as any);
    await orchestrator!.deploy();
    
    console.log(chalk.green('\n✅ Deployed successfully!\n'));
  });

// ops - Post-launch operations
program
  .command('ops')
  .description('Post-launch operations')
  .action(async () => {
    initialize();
    
    console.log(chalk.blue('\n🏭 Setting up Operations...\n'));
    
    await orchestrator!.startOperations();
    
    const monitoring = await orchestrator!.setupMonitoring();
    const playbook = await orchestrator!.generateIncidentPlaybook();
    const scaling = await orchestrator!.generateScalingPlaybook();
    
    console.log(chalk.green('\n✅ Operations configured!\n'));
    console.log('Monitoring:', monitoring.uptime ? '✅' : '❌');
    console.log('Incident Response:', playbook.runbooks.length, 'runbooks');
    console.log('Scaling:', scaling.triggers.length, 'triggers');
  });

// chat - Chat with an agent
program
  .command('chat')
  .description('Chat with an agent')
  .argument('[agent]', 'Agent to chat with (architect, developer, designer)')
  .action(async (agent) => {
    initialize();
    
    const selectedAgent = agent || await inquirer.prompt([
      {
        type: 'list',
        name: 'agent',
        message: 'Select agent:',
        choices: ['🏛️ Architect', '💻 Developer', '🎨 Designer']
      }
    ]).then(r => r.agent.split(' ')[1].toLowerCase());
    
    const agentInstance = orchestrator!.getAgent(selectedAgent as any);
    
    console.log(chalk.blue(`\n💬 Chatting with ${selectedAgent}...\n`));
    console.log('(Type "exit" to quit)\n');
    
    while (true) {
      const { message } = await inquirer.prompt([
        {
          type: 'input',
          name: 'message',
          message: 'You: '
        }
      ]);
      
      if (message.toLowerCase() === 'exit') break;
      
      // In full implementation, this would send to LLM
      console.log(chalk.gray(`\n[${selectedAgent}]: I'm ready to help! Ask me anything about your project.\n`));
    }
  });

// config - Manage configuration
program
  .command('config')
  .description('Manage configuration')
  .action(async () => {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Configuration:',
        choices: ['Show current config', 'Set API key', 'Add provider']
      }
    ]);
    
    if (action === 'Show current config') {
      console.log(chalk.blue('\n⚙️ Current Configuration\n'));
      console.log(JSON.stringify(config, null, 2));
    }
  });

// help
program
  .command('help')
  .description('Show help')
  .action(() => {
    console.log(`
🏗️ AI Dev Suite CLI - Enterprise SDLC Operating System

USAGE:
  ai-dev-suite <command> [options]

COMMANDS:
  init [name]        Initialize a new project
  new <idea>         Start a new project with viability analysis
  develop            Enter development mode
  create <spec>      Create a new feature
  review <file>      Review code
  test               Run tests
  status             Show project status
  harden             Run hardening phase
  deploy             Deploy to production
  ops                Post-launch operations
  chat [agent]       Chat with an agent
  config             Manage configuration

EXAMPLES:
  ai-dev-suite init my-app
  ai-dev-suite new "Build a task management app"
  ai-dev-suite create "Add user authentication"
  ai-dev-suite chat architect

For more info: https://github.com/Charteredprofessionals/vs-extension
`);
  });

// Parse
program.parse();