import api from '../../../app/api';
import {GetAllDto} from './dto';
import {CustomersApiChangePriorityParams, CustomersApiMethods} from './types';

/**
 * API для взаимодействия с заказчиками
 */
export const ServiceApi: CustomersApiMethods = {
    getAll: () => api.get<GetAllDto>(`/customers`),

    delete: (id: number) => api.delete(`/customers/${id}`),

    changePriority: (id: number, data: CustomersApiChangePriorityParams) =>
        api.patch(`/customers/${id}`, data),
};
