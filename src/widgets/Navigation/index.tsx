import {Link, useLocation} from 'react-router-dom';
import {PublicRoute} from './types';
import {SlugPages} from '../../app/routes/pages';
import {
    NavigationContainer,
    NavigationTabs,
    NavigationTab,
    NavigationWrapper,
} from './styledComponents';

const publicRoutes: PublicRoute[] = [
    {
        label: 'Услуги',
        slug: SlugPages.SERVICES,
    },
    {
        label: 'Заявки',
        slug: SlugPages.ORDERS,
    },
    {
        label: 'Заказчики',
        slug: SlugPages.CUSTOMERS,
    },
    {
        label: 'Исполнители',
        slug: SlugPages.EXECUTORS,
    },
    {
        label: 'Статистика',
        slug: SlugPages.STATS,
    },
    {
        label: 'Чат',
        slug: SlugPages.CHAT,
    },
];

/**
 * Компонент навигации
 */

const Navigation = () => {
    const location = useLocation();

    const currentTab =
        publicRoutes.find((el) => location.pathname.includes(el.slug)) ??
        publicRoutes[0];

    return (
        <NavigationWrapper as="nav">
            <NavigationContainer>
                <NavigationTabs
                    value={currentTab.slug}
                    scrollButtons="auto"
                    centered={true}
                >
                    {publicRoutes.map((el) => {
                        return (
                            <NavigationTab
                                label={el.label}
                                value={el.slug}
                                component={(props) => (
                                    <Link
                                        {...props}
                                        to={`/${el.slug}`}
                                        viewTransition
                                    />
                                )}
                                key={el.slug}
                            />
                        );
                    })}
                </NavigationTabs>
            </NavigationContainer>
        </NavigationWrapper>
    );
};

export default Navigation;
