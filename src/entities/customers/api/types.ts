import {AxiosPromise} from 'axios';
import {GetAllDto} from './dto';

/**
 * Интерфейс для API заказчиков
 */
export interface CustomersApiMethods {
    /**
     * Получить всех заказчиков
     */
    getAll: () => AxiosPromise<GetAllDto>;

    /**
     * Удалить заказчика
     */
    delete: (id: number) => AxiosPromise;

    /**
     * Изменить приоритет заказчика
     */
    changePriority: (
        id: number,
        data: CustomersApiChangePriorityParams
    ) => AxiosPromise;
}

export type CustomersApiChangePriorityParams = {
    priority: number;
};
