import {Route, Routes, Navigate} from 'react-router-dom';
import {Layout} from '../../pages/Layout';
import LoginPage from '../../pages/auth/LoginPage';
import RecoveryPage from '../../pages/auth/RecoveryPage';
import OrdersPage from '../../pages/dashboard/OrdersPage';
import CustomersPage from '../../pages/dashboard/CustomersPage';
import ExecutorsPage from '../../pages/dashboard/ExecutorsPage';
import StatsPage from '../../pages/dashboard/StatsPage';
import ServicesPage from '../../pages/dashboard/ServicesPage';
import ChatPage from '../../pages/dashboard/ChatPage';
import {SlugPages} from './pages';

export const AppRouter = () => {
    const isAuthenticated = true; // Замени на реальную проверку авторизации (из Redux)

    return (
        <Routes>
            {/*  @TODO Отключить доступ авторизованным челикам к страницам авторизации и регистрации*/}
            {/* Публичные маршруты (без шапки) */}
            <Route path={`/${SlugPages.LOGIN}`} element={<LoginPage />} />
            <Route path={`/${SlugPages.RECOVERY}`} element={<RecoveryPage />} />

            {/* Приватные маршруты (с шапкой через Layout) */}
            <Route
                path="/"
                element={
                    isAuthenticated ? (
                        <Layout />
                    ) : (
                        <Navigate to={`/${SlugPages.LOGIN}`} replace />
                    )
                }
            >
                <Route index element={<OrdersPage />} />
                <Route path={SlugPages.SERVICES} element={<ServicesPage />} />
                <Route path={SlugPages.ORDERS} element={<OrdersPage />} />
                <Route path={SlugPages.CUSTOMERS} element={<CustomersPage />} />
                <Route path={SlugPages.EXECUTORS} element={<ExecutorsPage />} />
                <Route path={SlugPages.STATS} element={<StatsPage />} />
                <Route path={SlugPages.CHAT} element={<ChatPage />} />
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
