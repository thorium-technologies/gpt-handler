import { ThemeProvider, CssBaseline } from '@mui/material';
import { muiTheme } from '../core/theme/mui-theme';
import { HomePage } from "../ui/pages/home-page"

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App
