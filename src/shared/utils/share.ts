/**
 * Получить нормальный путь к картинкам
 */
export const getImagePath = (path?: string) => {
    if (!path) return '';

    const host = import.meta.env.VITE_SERVER_URL || '';

    const normalPath = path.replace('files/', 'uploads/');

    return host + normalPath;
};
