import api from '../../../app/api';
import {GetAllDto} from './dto';
import {ExecutorsApiChangePriorityParams, ExecutorsApiMethods} from './types';

/**
 * API для взаимодействия с исполнителями
 */
export const ExecutorApi: ExecutorsApiMethods = {
    getAll: () => api.get<GetAllDto>(`/executor?limit=1000`),

    delete: (id: number | string) => api.delete(`/executor/${id}`),

    getStats: (id: number | string) => api.get(`/executor/${id}/stats`),

    changePriority: (id: number, data: ExecutorsApiChangePriorityParams) =>
        api.put(`/admin/users/${id}/priority`, data),
};
