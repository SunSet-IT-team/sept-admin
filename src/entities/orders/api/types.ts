import {AxiosPromise} from 'axios';
import {GetAllDto} from './dto';
import {OrderStatus} from '../model/types';

/**
 * Интерфейс для API услуг
 */
export interface OrdersApiMethods {
    /**
     * Получить все услуги
     */
    getAll: (params?: OrdersApiGetAllParams) => AxiosPromise<GetAllDto>;

    /**
     * Удалить услугу
     */
    delete: (id: number) => AxiosPromise;

    /**
     * Изменить приоритет услуги
     */
    changePriority: (
        id: number,
        data: OrdersApiChangePriorityParams
    ) => AxiosPromise;
}

export type OrdersApiGetAllParams = {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    status?: OrderStatus;
    executorId?: number;
    customerId?: number;
};

export type OrdersApiChangePriorityParams = {
    priority: number;
};
