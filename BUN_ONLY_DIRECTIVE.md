# 🚨 CRITICAL PROJECT DIRECTIVE: BUN PACKAGE MANAGER ONLY

## MANDATORY PACKAGE MANAGER PROTOCOL

**ABSOLUTE RULE:** This project uses **BUN EXCLUSIVELY** as the package manager. NPM usage is **STRICTLY PROHIBITED**.

### 🔒 ENFORCEMENT RULES

#### ✅ ALLOWED COMMANDS
```bash
# Package Management
bun install
bun add [package]
bun remove [package]
bun update
bun outdated

# Development
bun run dev
bun run build
bun run preview
bun run lint
bun run type-check

# Project Operations
bun create
bun init
```

#### ❌ FORBIDDEN COMMANDS
```bash
# NEVER USE THESE - IMMEDIATE PROJECT VIOLATION
npm install
npm i
npm add
npm remove
npm uninstall
npm update
npm run [script]
npm start
npm build
npm test
npx [command]
yarn install
yarn add
yarn remove
pnpm install
pnpm add
pnpm remove
```

### 🛡️ PROTECTION MECHANISMS

#### File System Safeguards
- **DELETE** any `package-lock.json` files immediately if found
- **DELETE** any `yarn.lock` files immediately if found  
- **DELETE** any `pnpm-lock.yaml` files immediately if found
- **PRESERVE** `bun.lockb` file at all costs
- **NEVER** commit non-Bun lock files to repository

#### Environment Setup
```bash
# Add to your shell profile (.bashrc, .zshrc, etc.)
alias npm='echo "❌ NPM FORBIDDEN - Use BUN instead: bun" && false'
alias npx='echo "❌ NPX FORBIDDEN - Use BUN instead: bunx" && false'
alias yarn='echo "❌ YARN FORBIDDEN - Use BUN instead: bun" && false'
alias pnpm='echo "❌ PNPM FORBIDDEN - Use BUN instead: bun" && false'
```

### 📋 MIGRATION CHECKLIST

If you encounter NPM artifacts:

- [ ] Delete `package-lock.json`
- [ ] Delete `node_modules/` directory
- [ ] Run `bun install` to regenerate with Bun
- [ ] Verify `bun.lockb` exists
- [ ] Test all scripts work with `bun run [script]`
- [ ] Update any documentation referencing NPM

### 🚨 VIOLATION CONSEQUENCES

Using NPM will result in:
- **Lock file conflicts** between `package-lock.json` and `bun.lockb`
- **Dependency resolution inconsistencies**
- **Performance degradation** (Bun is significantly faster)
- **Build pipeline failures**
- **Development environment corruption**

### 🎯 BUN ADVANTAGES FOR THIS PROJECT

1. **Speed**: 10-100x faster than NPM
2. **Reliability**: Better dependency resolution
3. **Simplicity**: Single tool for package management and running
4. **Modern**: Built for modern JavaScript/TypeScript projects
5. **Compatibility**: Works with existing NPM packages

### 📖 QUICK REFERENCE

| NPM Command | BUN Equivalent |
|-------------|----------------|
| `npm install` | `bun install` |
| `npm add package` | `bun add package` |
| `npm remove package` | `bun remove package` |
| `npm run script` | `bun run script` |
| `npx command` | `bunx command` |
| `npm update` | `bun update` |
| `npm outdated` | `bun outdated` |

### 🔧 TROUBLESHOOTING

**Problem**: "Command not found: bun"
**Solution**: Install Bun: `curl -fsSL https://bun.sh/install | bash`

**Problem**: "Package not found"
**Solution**: Clear cache: `bun pm cache rm` then `bun install`

**Problem**: "Lock file conflicts"
**Solution**: Delete all non-Bun lock files, run `bun install`

---

## 📢 COPY-PASTE DIRECTIVE FOR TEAM COMMUNICATION

```
🚨 PROJECT DIRECTIVE: BUN PACKAGE MANAGER ONLY

This project uses BUN exclusively. NPM is strictly forbidden.

✅ Use: bun install, bun add, bun run
❌ Never: npm install, npm add, npm run

If you see package-lock.json, delete it immediately.
Only bun.lockb should exist.

Bun is faster, more reliable, and required for this project.
```

---

**REMEMBER**: This directive is non-negotiable. Bun usage ensures project consistency, performance, and reliability. Any deviation compromises the entire development workflow.

**Last Updated**: December 2024  
**Enforcement Level**: CRITICAL  
**Compliance Required**: 100%