import {AxiosPromise} from 'axios';
import {GetAllDto} from './dto';

/**
 * Интерфейс для API услуг
 */
export interface OrdersApiMethods {
    /**
     * Получить все услуги
     */
    getAll: () => AxiosPromise<GetAllDto>;

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

export type OrdersApiChangePriorityParams = {
    priority: number;
};
