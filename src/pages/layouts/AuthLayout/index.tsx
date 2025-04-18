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
                    <Box
                        component="img"
                        sx={styles.logo}
                        alt="Your logo"
                        src="/logo.png"
                    />
                    <Outlet />
                </Box>
            </Container>
        </div>
    );
};
