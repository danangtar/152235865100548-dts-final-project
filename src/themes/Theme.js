import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'rgba(31,31,35,0.91)',
            light: 'rgba(72,72,76,0.91)',
        },
        secondary: {
            main: '#f50057',
            light: '#f73387',
            dark: '#ab0049',
            contrastText: '#ffffff',
        },
        background: {
            default: '#000000',
            paper: '#3b3b3b',
        },
        text: {
            primary: '#ffffff',
            secondary: '#fffffe',
            disabled: 'rgba(255,255,255,0.5)',
            hint: 'rgba(255,255,255,0.5)',
        },
    },
});

export default theme;