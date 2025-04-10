import api from '../../../app/api';
import {UserApiMethods} from './types';

/**
 * API для авторизации
 */
export const userApi: UserApiMethods = {
    auth: (param) => api.post(`/admin/login`, param),

    getMe: () => api.get(`/admin/me`),

    recovery: (param) => api.post(`/admin/recovery`, param),
};
