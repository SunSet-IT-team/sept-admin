import {AxiosPromise} from 'axios';
import {GetAllDto} from './dto';

/**
 * Интерфейс для API исполнителей
 */
export interface ExecutorsApiMethods {
    /**
     * Получить всех исполнителей
     */
    getAll: () => AxiosPromise<GetAllDto>;

    /**
     * Удалить исполнителя
     */
    delete: (id: number) => AxiosPromise;

    /**
     * Изменить приоритет исполнителя
     */
    changePriority: (
        id: number,
        data: ExecutorsApiChangePriorityParams
    ) => AxiosPromise;
}

export type ExecutorsApiChangePriorityParams = {
    priority: number;
};
