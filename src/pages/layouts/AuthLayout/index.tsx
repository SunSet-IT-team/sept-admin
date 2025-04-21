import {Box, Container} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useStyles} from './styles';

/**
 * Базовый шаблон для страниц авторизации
 */
export const AuthLayout = () => {
    const styles = useStyles();
    return (
        <div className="app">
            <Container maxWidth="lg" sx={styles.container}>
                <Box className="main" component="main" sx={styles.content}>
                    <Box sx={styles.logoContainer}>
                        <Box
                            component="img"
                            sx={styles.logo}
                            alt="ЭКОКОНТРОЛЬ logo"
                            src="/logo.png"
                        />
                        <Box
                            component="img"
                            sx={styles.logoText}
                            alt="ЭКОКОНТРОЛЬ"
                            src="/logo_text.png"
                        />
                    </Box>
                    <Outlet />
                </Box>
            </Container>
        </div>
    );
};
