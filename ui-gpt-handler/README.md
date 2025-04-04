# 🧠 Monopage App - UI GPT Handler

A single-page application built with React, TypeScript, Vite, and Material UI.  
It uses a clean hexagonal architecture and applies SOLID principles to ensure maintainability, scalability, and readability.

---

## ⚙️ Tech Stack

- **Vite + SWC + React + TypeScript**
- **Material UI (MUI)** for design system and components
- **pnpm** as package manager
- **Hexagonal Architecture** for scalable structure
- **ESLint + Prettier** for consistent code quality

---

## 📁 Project Structure

```bash
src/
├── app/          # App entry point, ThemeProvider
├── core/         # Shared logic (constants, theme, types)
├── ui/           # Pages, layout, components (Tabs, Layouts, etc.)
```

For a complete explanation of the structure, see the [Architecture](./docs/architecture.md) guide.

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

## 📄 Documentation

- 📐 [Architecture](./docs/architecture.md) — folder structure, boundaries, SOLID practices
- 🎨 [Theming](./docs/theming.md) — light mode, MUI theme customization
- 🧩 [Components](./docs/components.md) — reusable component philosophy
- 🖋 [Code Style](./docs/code-style.md) — formatting, naming, lint rules

## 📝 Notes

This project uses @vitejs/plugin-react-swc for faster builds and HMR powered by [SWC](https://swc.rs/).
ESLint is configured for TypeScript with the possibility to add React-specific rules.

