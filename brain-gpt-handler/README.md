# 🧠 Backend - GPT Handler

A backend application built with NestJS, TypeScript, and SWC.  
It follows a clean hexagonal architecture and applies SOLID principles to ensure maintainability, scalability, and readability.

---

## ⚙️ Tech Stack

- **NestJS + TypeScript + SWC**
- **pnpm** as package manager
- **Hexagonal Architecture** for scalable structure
- **ESLint + Prettier** for consistent code quality

---

## 📁 Project Structure

```bash
src/
├── common/       # Shared utilities, configurations, and interfaces
├── enhance-code/ # Feature module for enhancing code using GPT
├── programming-algorithm/ # Feature module for generating algorithms
├── app.module.ts # Root application module
├── main.ts       # Application entry point
```

---

## 🌐 Purpose and Functionality

The backend GPT Handler provides APIs to interact with GPT-based services. It includes the following modules:

- **Enhance Code Module**:  
  This module provides an API to enhance code snippets. Users can send a programming language and a code snippet, and the service will return an improved version of the code.

- **Programming Algorithm Module**:  
  This module provides an API to generate programming algorithms. Users can specify a programming language and the name or description of the algorithm they want to generate. The service will return the generated algorithm.

These modules are designed to streamline coding tasks and improve productivity by leveraging GPT's capabilities.

---

## 🚀 Getting Started

```bash
pnpm install
pnpm start:dev
```

---

## 📄 Documentation

- 📐 [Architecture](./docs/architecture.md) — folder structure, boundaries, SOLID practices
- 🧩 [Modules](./docs/modules.md) — feature modules and their responsibilities
- 🖋 [Code Style](./docs/code-style.md) — formatting, naming, lint rules

---

## 📝 Notes

This project uses SWC for faster builds and improved performance.  
ESLint is configured for TypeScript with NestJS-specific rules.
