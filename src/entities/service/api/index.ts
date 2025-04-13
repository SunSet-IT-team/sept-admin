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
    getAll: () => api.get<GetAllDto>(`/service`),

    create: (data: ServiceApiCreateParams) => api.post(`/service`, data),

    delete: (id: number) => api.delete(`/service/${id}`),

    changePriority: (id: number, data: ServiceApiChangePriorityParams) =>
        api.patch(`/service/${id}`, data),
};
