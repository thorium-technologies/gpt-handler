# 🎨 Theming

This project uses [Material UI (MUI)](https://mui.com/) for its component library and styling system.  
The app is configured with a **custom light theme**, with centralized color, typography, and shape settings.

---

## 🌈 Theme Structure

All theming logic is stored in:

```bash
src/core/theme/ 
    ├── mui-theme.ts # Main MUI theme config
    ├── palette.ts # Color palette definition
    └── typography.ts # Font configuration
```


> The theme is applied globally via `ThemeProvider` in `app/App.tsx`, along with `CssBaseline` for default style resets.

---

## 🎨 Color Palette

Defined in `core/theme/palette.ts` using MUI’s `PaletteOptions`:

```ts
export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: { main: '#1976d2' },
  secondary: { main: '#9c27b0' },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#333',
    secondary: '#555',
  },
};
```

You can modify or extend it with custom color scales if needed.

## 🔤 Typography

Typography settings (e.g. font family, heading sizes) are declared in core/theme/typography.ts:

```ts
export const typography = {
  fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
  h1: { fontSize: '2rem', fontWeight: 500 },
  body1: { fontSize: '1rem' },
};
```
Use these through MUI's `<Typography />` component and `theme.typography` in custom styling.

## 🧩 Using Theme in Components
Inside any component, you can access the active theme via `useTheme()`:
```tsx
import { useTheme } from '@mui/material';

const theme = useTheme();
console.log(theme.palette.primary.main); // Access primary color
```

Also, apply theme-aware styles with the `sx` prop:
```tsx
<Box sx={{ bgcolor: theme.palette.background.paper }} />
```

## 🧪 Theme Usage Example
In `CodeSnippet.tsx`, the background color and spacing are theme-driven:
```tsx
<Paper
  sx={{
    bgcolor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  }}
/>
```

🚦 Extending the Theme
You can extend the theme to include custom properties like:

```ts
declare module '@mui/material/styles' {
  interface Theme {
    customSpacing: {
      sectionGap: string;
    };
  }
  interface ThemeOptions {
    customSpacing?: {
      sectionGap?: string;
    };
  }
}
```
This allows you to use `theme.customSpacing.sectionGap` throughout your app.

## 🌙 Dark Mode
The theme is currently light-only. If you want to add dark mode:
- Define a darkPalette in palette.ts
- Store user preference in localStorage or a context
- Switch between themes using:

```tsx
<ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
```

🧼 Guidelines
- Avoid hardcoded values in sx; prefer theme.spacing(), theme.palette, etc.
- Keep typography and colors consistent across components
- Place custom styles in theme/ or via the theme itself (e.g., spacing, shadows)

## 📎 Related Docs

- [Architecture](./architecture.md)
- [Components](./components.md)
- [Code Style](./code-style.md)