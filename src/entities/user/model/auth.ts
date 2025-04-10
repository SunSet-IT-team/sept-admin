/**
 * Авторизован ли пользователь
 */
export const isAuth = () => {
    return localStorage.getItem('token') ? true : false;
};

/**
 * Удалить токен
 */
export const logout = () => {
    localStorage.setItem('token', '');
};

/**
 * Установить токен
 */
export const auth = (token: string) => {
    localStorage.setItem('token', token);
};
