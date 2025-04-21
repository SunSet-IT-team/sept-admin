import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeText {
        black: string;
        white: string;
        gray: string;
    }

    interface TypeBackground {
        blue: string;
        gray: string;
        gradient: string;
    }
}

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#3975CF',
            dark: '#1565c0',
            light: '#D9D9D9',
        },
        text: {
            black: '#000000',
            white: '#FFFFFF',
            gray: '#4D4D4D',
        },
        secondary: {
            main: '#3FBC14', // Фиолетовый
        },
        error: {
            main: '#d32f2f', // Красный
        },
        background: {
            gradient: 'linear-gradient(to right, #3975CF, #3FBC14)',
            default: '#f5f5f5', // Светло-серый фон
            paper: '#ffffff', // Белый для карточек
            gray: '#F3F3F3',
            blue: '#3975CF33',
        },
    },
    typography: {
        fontFamily: '"Jost", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 24,
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: 20,
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontSize: 15,
        },
    },

    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                sx: {
                    padding: '10px 0',
                    fontSize: '14px',
                    textTransform: 'none',
                },
            },
            styleOverrides: {
                // Стили для primary кнопки в состоянии загрузки
                containedPrimary: {
                    '&.Mui-disabled': {
                        background: '#3975CF33',
                        opacity: 0.7,
                        color: 'transparent',
                    },
                },
            },
        },

        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(to right, #3975CF, #3FBC14)',
                    borderRadius: '40px',
                    minHeight: '71px',
                    position: 'relative',
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    justifyContent: 'end',
                    paddingBottom: '10px',
                    borderRadius: '40px',
                    '& .MuiBottomNavigationAction-label': {
                        fontSize: '13px',
                    },
                    '&.Mui-selected .MuiBottomNavigationAction-label': {
                        fontSize: '13px',
                        color: 'white',
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3975CF33',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3975CF33',
                    },
                },
            },
        },
    },
});
