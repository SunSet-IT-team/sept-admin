import {Container} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {ContainerStyles} from './styles';
import {Header} from '../../widgets/Header';
import Navigation from '../../widgets/Navigation';

/**
 * Базовый шаблон для страниц в админке
 */
export const Layout = () => {
    return (
        <div className="app">
            <Header />
            <Navigation />
            <Container maxWidth="lg" sx={ContainerStyles}>
                <main className="main">
                    <Outlet />
                </main>
            </Container>
        </div>
    );
};
