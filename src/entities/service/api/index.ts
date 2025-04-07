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
    getAll: () => api.get<GetAllDto[]>(`/services`),

    create: (data: ServiceApiCreateParams) => api.post(`/services`, data),

    delete: (id: number) => api.delete(`/services/${id}`),

    changePriority: (id: number, data: ServiceApiChangePriorityParams) =>
        api.patch(`/services/${id}`, data),
};
