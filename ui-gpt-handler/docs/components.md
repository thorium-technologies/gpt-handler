# 🧩 Components Guide

This project uses [Material UI (MUI)](https://mui.com/) to build all UI components.  
Components are organized by purpose and reuse strategy within the `src/ui/components/` folder.

We follow a clear separation of:

- **Generic, reusable components** (`common/`)
- **Feature- or tab-specific components** (`Tabs/` and others)

---

## 📁 Structure


```bash
src/ui/components/
├── common/ # Generic components (buttons, inputs, layout helpers)
│ ├── code-snippet-area.tsx
│ ├── custom-button.tsx
├── tabs/ # Components specific to the tabbed interface
│ ├── tabs-container.tsx
│ ├── tab-panel.tsx
│ ├── enhance-code.tsx
│ └── compact-object.tsx
```

---

## 🔄 Reusable (`common/`) Components

These components should be:

- Decoupled from any specific feature or business logic
- Reusable across multiple pages or layouts
- Theme-aware and extendable via props

✅ Examples:
- `code-snippet-area.tsx`: stylized code block with copy functionality
- `custom-button.tsx`: custom styled MUI button

> Prefer receiving `sx` or `variant` props to allow flexible styling via the theme.

---

## 🧠 Tab/Feature-Specific Components

Components inside folders like `tabs/` are tightly coupled to a feature or layout.

They:

- May render tab-specific content
- Should remain isolated from shared logic
- Can compose `common/` components inside them

✅ Example:
- `enhance-code.tsx` uses `<CodeSnippet />` and `<CustomButton />` to build a tab

---

## 🧼 Naming & File Conventions

| Type                     | Convention                 |
|--------------------------|----------------------------|
| File names               | `kebab-case.tsx`           |
| Component names          | `PascalCase`               |
| Props interface          | `ComponentNameProps`       |
| Styling props            | Use `sx` with MUI          |
| State/handlers           | Semantic (e.g. `copied`, `handleClick`) |

> ✅ File names are `kebab-case` for readability and consistency  
> ✅ Component names (exports) are still in `PascalCase` as per React/MUI best practices

---

## ✅ Best Practices
Avoid hardcoded styles — always use theme-based values

- Keep components composable and focused
- Delegate logic to parents or custom hooks
- Prefer controlled components with clear prop interfaces

---

## 📎 Related Docs

- [Architecture](./architecture.md)
- [Theming](./theming.md)
- [Code Style](./code-style.md)