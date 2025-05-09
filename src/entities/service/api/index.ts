import api from '../../../app/api';
import {GetAllDto} from './dto';
import {
    ServiceApiChangePriorityParams,
    ServiceApiCreateParams,
    ServiceApiMethods,
} from './types';

/**
 * API для взаимодействия с услугами
 */
export const ServiceApi: ServiceApiMethods = {
    getAll: () => api.get<GetAllDto>(`/service?limit=1000`),

    create: (data: ServiceApiCreateParams) =>
        api.post(`/service`, data, {
            headers: {'Content-Type': 'multipart/form-data'},
        }),

    delete: (id: number) => api.delete(`/service/${id}`),

    changePriority: (id: number, data: ServiceApiChangePriorityParams) =>
        api.patch(`/service/${id}`, data),
};
