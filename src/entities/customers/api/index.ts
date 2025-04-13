import api from '../../../app/api';
import {GetAllDto} from './dto';
import {CustomersApiChangePriorityParams, CustomersApiMethods} from './types';

/**
 * API для взаимодействия с заказчиками
 */
export const CustomerApi: CustomersApiMethods = {
    getAll: () => api.get<GetAllDto>(`/customer/list?status=VERIFIED&limit=-1`), // Хардкод но как иначе

    delete: (id: number) => api.delete(`/customer/${id}`),

    changePriority: (id: number, data: CustomersApiChangePriorityParams) =>
        api.patch(`/customer/${id}`, data),
};
