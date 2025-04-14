import api from '../../../app/api';
import {GetAllDto} from './dto';
import {ExecutorsApiChangePriorityParams, ExecutorsApiMethods} from './types';

/**
 * API для взаимодействия с исполнителями
 */
export const ExecutorApi: ExecutorsApiMethods = {
    getAll: () => api.get<GetAllDto>(`/executor`),

    delete: (id: number) => api.delete(`/executor/${id}`),

    changePriority: (id: number, data: ExecutorsApiChangePriorityParams) =>
        api.patch(`/executor/${id}`, data),
};
