# 🖋 Code Style Guide

This guide outlines the code style conventions used in the project to ensure readability, maintainability, and developer efficiency.

The project uses:

- **TypeScript** for static typing
- **React** with functional components and hooks
- **Material UI (MUI)** for styling and design
- **ESLint + Prettier** for formatting and linting
- **File naming** in `kebab-case`
- **Component names** in `PascalCase`

---

## ✅ General Rules

- Use **TypeScript** everywhere — no `any` unless explicitly justified
- Use **arrow functions** for components and handlers
- Destructure props and avoid inline object creation when possible
- Extract **magic values** into constants or theme values
- Follow the **single responsibility principle** per component/function

---

## 📁 File & Folder Naming

| Element              | Convention     | Example                      |
|----------------------|----------------|------------------------------|
| File names           | `kebab-case.tsx` | `text-area.tsx`, `tab-panel.tsx` |
| Component names      | `PascalCase`     | `TextArea`, `CodeSnippet`   |
| Props interface      | `ComponentNameProps` | `TextAreaProps`            |
| Constants files      | `snake_case.ts`  | `ui.ts`, `palette.ts`        |
| Folders              | `kebab-case/`    | `common/`, `tabs/`           |

---

## 🧠 TypeScript Guidelines

- Avoid `any`. Use `unknown` if needed, or define a proper type/interface
- Always type `useState` correctly:
  ```ts
  const [value, setValue] = useState<string>('default');
    ```
- Use union types and enums when appropriate
- Explicitly define Props interfaces for all components

---

## 🧩 Component Rules
- Prefer small, composable components over large multi-purpose ones
- Accept optional sx props for external styling
- Keep side effects inside useEffect
- Use ThemeProvider and useTheme() for all theme-based values
- Extract repetitive logic into custom hooks if needed

---

## 🎨 Styling Rules
- Use sx instead of className when styling MUI components
- Use theme values instead of hardcoded styles:
    ```tsx
    sx={{ bgcolor: theme.palette.background.paper }}
    Define color palette and typography in the theme/ folder
    ```
- Use spacing(), shadows, and shape from the MUI theme when possible

---

# 🧼 Commit Guidelines
- Use clear, descriptive commit messages:
    ```vbnet
    feat: add theme support for light mode
    fix: resolve issue with tab switching
    refactor: simplify text-area component logic
    ```

## 📎 Related Docs

- [Architecture](./architecture.md)
- [Theming](./theming.md)
- [Components](./components.md)