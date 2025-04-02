import {createTheme} from '@mui/material/styles';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Синий (как у Material UI по умолчанию)
            dark: '#1565c0',
            light: '#42a5f5',
        },
        secondary: {
            main: '#9c27b0', // Фиолетовый
        },
        error: {
            main: '#d32f2f', // Красный
        },
        background: {
            default: '#f5f5f5', // Светло-серый фон
            paper: '#ffffff', // Белый для карточек
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        button: {
            textTransform: 'none', // Убираем автоматический CAPS у кнопок
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Закруглённые кнопки
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Лёгкая тень
                },
            },
        },
    },
});
