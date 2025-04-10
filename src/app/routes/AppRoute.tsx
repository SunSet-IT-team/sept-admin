import {Route, Routes, Navigate} from 'react-router-dom';
import {MainLayout} from '../../pages/layouts/MainLayout';
import LoginPage from '../../pages/auth/LoginPage';
import RecoveryPage from '../../pages/auth/RecoveryPage';
import OrdersPage from '../../pages/dashboard/OrdersPage';
import CustomersPage from '../../pages/dashboard/CustomersPage';
import ExecutorsPage from '../../pages/dashboard/ExecutorsPage';
import StatsPage from '../../pages/dashboard/StatsPage';
import ServicesPage from '../../pages/dashboard/ServicesPage';
import ChatsPage from '../../pages/dashboard/ChatsPage';
import {SlugPages} from './pages';
import {AuthLayout} from '../../pages/layouts/AuthLayout';
import ChatPage from '../../pages/ChatPage';
import {useAppDispatch, useAppSelector} from '../store/hook';
import {
    getCurrentUser,
    getIsinited,
    getIsUserLoading,
} from '../../entities/user/model/selectors';
import {useEffect} from 'react';
import {fetchAdminData} from '../../entities/user/model/thunk';
import LoadPage from '../../pages/LoadPage';

export const AppRouter = () => {
    const user = useAppSelector(getCurrentUser);
    const isinited = useAppSelector(getIsinited);
    const isLoading = useAppSelector(getIsUserLoading);
    const token = localStorage.getItem('token');

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchAdminData());

        return () => {
            fetching.abort();
        };
    }, []);

    const isAuthenticated = user && isinited && !isLoading;

    if (!isinited && token)
        return (
            <Routes>
                <Route index element={<LoadPage />} />
            </Routes>
        );

    return (
        <Routes>
            {/* Публичные маршруты (без шапки) */}
            <Route
                element={
                    !isAuthenticated ? (
                        <AuthLayout />
                    ) : (
                        <Navigate to={`/`} replace />
                    )
                }
            >
                <Route path={`/${SlugPages.LOGIN}`} element={<LoginPage />} />
                <Route
                    path={`/${SlugPages.RECOVERY}`}
                    element={<RecoveryPage />}
                />
            </Route>

            {/* Приватные маршруты (с шапкой через Layout) */}
            <Route
                path="/"
                element={
                    isAuthenticated ? (
                        <MainLayout />
                    ) : (
                        <Navigate to={`/${SlugPages.LOGIN}`} replace />
                    )
                }
            >
                <Route index element={<ServicesPage />} />
                <Route path={SlugPages.SERVICES} element={<ServicesPage />} />
                <Route path={SlugPages.ORDERS} element={<OrdersPage />} />
                <Route path={SlugPages.CUSTOMERS} element={<CustomersPage />} />
                <Route path={SlugPages.EXECUTORS} element={<ExecutorsPage />} />
                <Route path={SlugPages.STATS} element={<StatsPage />} />
                <Route path={SlugPages.CHAT} element={<ChatsPage />} />
                <Route
                    path={`${SlugPages.CHAT}/:chatId`}
                    element={<ChatPage />}
                />
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
