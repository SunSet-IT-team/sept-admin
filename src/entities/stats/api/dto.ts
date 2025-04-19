import {ServerAns} from '../../../shared/types/share';
import {ExecuterStats, OrderStats} from '../model/types';

/**
 * DTO для получения статистики
 */
export type GetStatsDTO = ServerAns<StatsDTO>;

export type StatsDTO = {
    orders: {
        total: number;
        closed: number;
        open: number;
        closedPercent: string;
        openPercent: string;
    };
    executors: {
        total: number;
        newThisMonth: number;
        byCity: {
            [key: string]: number;
        };
        top: {
            name: string;
            closedCount: number;
        }[];
    };
    closedOrdersTotalSum: number;
};
