import { createTheme } from '@mui/material/styles';
import { lightPalette } from './palette';
import { typography } from './typography';

export const muiTheme = createTheme({
  palette: lightPalette,
  typography,
});
