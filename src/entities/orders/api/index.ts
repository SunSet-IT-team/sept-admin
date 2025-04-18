import api from '../../../app/api';
import {GetAllDto} from './dto';
import {OrdersApiChangePriorityParams, OrdersApiMethods} from './types';

/**
 * API для взаимодействия с услугами
 */
export const OrderApi: OrdersApiMethods = {
    getAll: (params) => {
        let url = `/order`;
        const paged = (params?.page || 0) + 1;
        url += `?page=${paged}`;

        if (params) {
            const {page, ...otherParams} = params;

            Object.entries(otherParams).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url += `&${key}=${value}`;
                }
            });
        }

        return api.get<GetAllDto>(url);
    },

    delete: (id: number) => api.delete(`/order/${id}`),

    changePriority: (id: number, data: OrdersApiChangePriorityParams) =>
        api.patch(`/order/${id}`, data),
};
