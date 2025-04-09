import {Executor} from '../../executors/model/types';

/**
 * Слайс для хранения общей статистики
 */
export interface StatsSlice {
    orderStats: OrderStats;
    executerStats: ExecuterStats;
    isLoading: boolean;
}

export type OrderStats = {
    // Все заявки
    totalOrders: number;

    // Закрытые (в статусе done)
    totalOrdersClosed: number;

    // Открытие (В ожидании или работе)
    totalOrdersOpen: number;

    // распределение по городам
    cities: {
        city: string;
        value: number;
    }[];
};

export type ExecuterStats = {
    totalExecuters: number;
    newExecuters: number;
    topExecuters: Executor[];
};
