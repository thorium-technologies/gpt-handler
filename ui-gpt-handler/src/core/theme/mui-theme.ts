import { createTheme } from '@mui/material/styles';
import { lightPalette } from './palette';
import { typography } from './typography';

export const muiTheme = createTheme({
  palette: lightPalette,
  typography,
  gradients: {
    primary: 'linear-gradient(135deg,rgb(224, 253, 225) 0%,rgb(167, 250, 225) 100%)',
  },
});
