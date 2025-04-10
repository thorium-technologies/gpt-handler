import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        gradients: {
            primary: string;
        };
    }

    interface ThemeOptions {
        gradients?: {
            primary?: string;
        };
    }
}
