import {Box, Container} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {Header} from '../../../widgets/Header';
import Navigation from '../../../widgets/Navigation';
import {useStyles} from './styles';

/**
 * Базовый шаблон для страниц в админке
 */
export const MainLayout = () => {
    const styles = useStyles();

    return (
        <div className="app">
            <Header />
            <Navigation />
            <Container maxWidth="lg" sx={styles.container}>
                <Box className="main" component="main" sx={styles.content}>
                    <Outlet />
                </Box>
            </Container>
        </div>
    );
};
