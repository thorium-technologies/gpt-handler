# 📐 Project Architecture

This project follows a modular and scalable **Hexagonal Architecture** to ensure a clean separation of concerns, ease of testing, and long-term maintainability.

It also embraces the **SOLID principles** for designing robust, decoupled components and modules.

---

## 🧱 High-Level Folder Structure

```bash
src/
├── app/            # Root app entry point and global providers
├── core/           # Shared logic and configurations
│   ├── constants/  # Configuration and display constants
│   ├── theme/      # Custom MUI theme, palette, typography, etc.
│   └── types/      # Shared TypeScript types/interfaces
├── infra/          # Infrastructure-related code (e.g., API clients, services)
├── ui/             # UI and presentation logic
│   ├── pages/      # Route-level views (e.g., HomePage)
│   ├── layout/     # General app layouts (e.g., MainLayout)
│   └── components/ # All UI components
│       ├── common/ # Reusable UI elements (buttons, inputs, etc.)
│       └── Tabs/   # Tab-specific components (e.g., TabsContainer)
├── utils/          # Utility functions and helpers
└── docs/           # Documentation files
```

---

## 📦 Layer Responsibilities

### `app/`

- Entry point for the app's root component
- Sets up global providers like `ThemeProvider`, `CssBaseline`, etc.
- No business or UI logic

---

### `core/`

- Shared logic used across the entire app (agnostic to features)
- Includes:
  - `constants/`: configuration and display constants
  - `theme/`: custom MUI theme, palette, typography, etc.
  - `types/`: shared TypeScript types/interfaces (if needed in the future)

---

### `infra/`

- Handles infrastructure-related code, such as:
  - API clients and services
  - External integrations
- Acts as the adapter layer between the core logic and external systems
- Keeps external dependencies isolated from the rest of the application

---

### `ui/`

- Handles UI and presentation logic only
- Subfolders:
  - `pages/`: route-level views (e.g., `HomePage`)
  - `layout/`: general app layouts (e.g., `MainLayout`)
  - `components/`: all UI components
    - `common/`: reusable UI elements (buttons, inputs, code snippet, etc.)
    - `Tabs/`: tab-specific components (e.g., `TabsContainer`, tab content)

> ❗ Components should **not** contain business logic — only presentation, layout, and minimal interaction.

---

### `utils/`

- Contains utility functions and helpers that are reusable across the app
- Examples:
  - String manipulation
  - Date formatting
  - API request helpers
- These functions should be pure and independent of specific app logic

---

## 🧭 Why Hexagonal?

Hexagonal (or "ports and adapters") architecture encourages:

- Independence between **UI**, **business rules**, and **infrastructure**
- Reusability and testability of core logic
- Easier growth as features are added

While this is a frontend-only project for now, this architecture scales beautifully when integrated with backend APIs, feature-based domains, etc.

---

## 🧠 SOLID Principles in Practice

- **S**ingle Responsibility: Components and files have one clear responsibility
- **O**pen/Closed: Easily extendable via constants, configuration, reusable props
- **L**iskov Substitution: Generic types and interfaces keep components interchangeable
- **I**nterface Segregation: No large, bloated props; small and focused interfaces
- **D**ependency Inversion: Theme and logic are injected via context and providers, not hardcoded

---

## 🧼 Other Guidelines

- **No hardcoded values** in components — use constants or props
- **No logic in layout/components** — delegate to context or service layers if needed
- **Keep components small and composable**

---

## ✅ Coming Soon (Future Considerations)

- Routing setup (if needed)
- State management strategy (if complexity grows)
- Integration with backend APIs
- Unit and integration testing

---

## 📎 Related Docs

- [Theming](./theming.md)
- [Components](./components.md)
- [Code Style](./code-style.md)
