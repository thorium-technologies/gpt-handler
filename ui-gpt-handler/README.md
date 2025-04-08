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
├── infra/        # API integrations and external services
```

---

## 🌐 Purpose and Functionality

The UI GPT Handler provides an intuitive interface for interacting with GPT-based services. The application includes the following tabs:

- **Enhance Code Tab**:  
  This tab allows users to input code and enhance it using GPT-based services. Users can select a programming language, provide the code to enhance, and receive an improved version of the code. The enhanced code is displayed in a dedicated area for easy review.

- **Programming Algorithm Tab**:  
  This tab enables users to generate programming algorithms. Users can specify a programming language and the name or description of the algorithm they want to generate. The generated algorithm is displayed in a code snippet area for further use.

These tabs are designed to streamline coding tasks and improve productivity by leveraging GPT's capabilities.

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

