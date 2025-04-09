import api from '../../../app/api';
import {GetAllDto} from './dto';
import {OrdersApiChangePriorityParams, OrdersApiMethods} from './types';

/**
 * API для взаимодействия с услугами
 */
export const ServiceApi: OrdersApiMethods = {
    getAll: () => api.get<GetAllDto>(`/orders`),

    delete: (id: number) => api.delete(`/orders/${id}`),

    changePriority: (id: number, data: OrdersApiChangePriorityParams) =>
        api.patch(`/orders/${id}`, data),
};
