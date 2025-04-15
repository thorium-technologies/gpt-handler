import { createTheme } from '@mui/material/styles';
import { lightPalette } from './palette';
import { typography } from './typography';

export const muiTheme = createTheme({
  palette: lightPalette,
  typography,
  gradients: {
    primary: 'linear-gradient(135deg,rgb(173, 250, 227) 0%, rgb(185, 255, 187) 100%)',
  },
});
