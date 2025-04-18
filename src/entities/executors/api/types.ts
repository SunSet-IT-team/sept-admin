import {AxiosPromise} from 'axios';
import {GetAllDto, GetStatsDto} from './dto';

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
    delete: (id: number | string) => AxiosPromise;

    /**
     * Получить статистику
     */
    getStats: (id: number | string) => AxiosPromise<GetStatsDto>;

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
