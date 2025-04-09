import {ExecuterStats, OrderStats} from '../model/types';

/**
 * DTO для получения статистики
 */
export type GetStatsDto = {
    orderStats: OrderStats;
    executerStats: ExecuterStats;
};
