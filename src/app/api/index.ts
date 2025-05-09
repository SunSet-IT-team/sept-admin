import axios from 'axios';

const api = axios.create({
    baseURL: `${
        import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'
    }/api`,
    timeout: 10000, // Таймаут запроса
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token && token != 'undefind') {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
