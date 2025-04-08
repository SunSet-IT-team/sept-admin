import {AxiosPromise} from 'axios';
import {GetAllDto} from './dto';

/**
 * Интерфейс для API услуг
 */
export interface ServiceApiMethods {
    /**
     * Получить все услуги
     */
    getAll: () => AxiosPromise<GetAllDto>;

    /**
     * Создать новую услугу
     */
    create: (data: ServiceApiCreateParams) => AxiosPromise;

    /**
     * Удалить услугу
     */
    delete: (id: number) => AxiosPromise;

    /**
     * Изменить приоритет услуги
     */
    changePriority: (
        id: number,
        data: ServiceApiChangePriorityParams
    ) => AxiosPromise;
}

export type ServiceApiCreateParams = {
    name: string;
};

export type ServiceApiChangePriorityParams = {
    priority: number;
};
