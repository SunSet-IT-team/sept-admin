import axios from 'axios';

const api = axios.create({
    baseURL: 'https://server.eko-kontrol.ru/api', // Базовый URL вашего API
    timeout: 10000, // Таймаут запроса
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
