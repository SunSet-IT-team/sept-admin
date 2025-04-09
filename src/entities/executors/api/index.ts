import api from '../../../app/api';
import {GetAllDto} from './dto';
import {ExecutorsApiChangePriorityParams, ExecutorsApiMethods} from './types';

/**
 * API для взаимодействия с исполнителями
 */
export const ServiceApi: ExecutorsApiMethods = {
    getAll: () => api.get<GetAllDto>(`/executors`),

    delete: (id: number) => api.delete(`/executors/${id}`),

    changePriority: (id: number, data: ExecutorsApiChangePriorityParams) =>
        api.patch(`/executors/${id}`, data),
};
