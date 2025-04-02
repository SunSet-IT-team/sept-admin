import {Outlet} from 'react-router-dom';

/**
 * Базовый шаблон для страниц в админке
 */
export const Layout = () => {
    return (
        <div className="app">
            {/* <Header /> */}
            <div className="app-content">
                <main className="main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
