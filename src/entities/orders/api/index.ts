import api from '../../../app/api';
import {GetAllDto} from './dto';
import {OrdersApiChangePriorityParams, OrdersApiMethods} from './types';

/**
 * API для взаимодействия с услугами
 */
export const OrderApi: OrdersApiMethods = {
    getAll: () => api.get<GetAllDto>(`/order`),

    delete: (id: number) => api.delete(`/order/${id}`),

    changePriority: (id: number, data: OrdersApiChangePriorityParams) =>
        api.patch(`/order/${id}`, data),
};
