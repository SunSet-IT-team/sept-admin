import {FetchedStats} from '../model/thunk';
import {StatsDTO} from './dto';

/**
 * Перевод DTO в нормальный вид
 * для услуг
 */
export const mapStatsDTO = (stats: StatsDTO): FetchedStats => {
    return {
        orderStats: {
            totalOrders: stats.orders.total,
            totalOrdersClosed: stats.orders.closed,
            totalOrdersOpen: stats.orders.open,
            cities: Object.entries(stats.executors.byCity).map(
                ([city, value]) => ({
                    city,
                    value,
                })
            ),
        },
        executerStats: {
            totalExecuters: stats.executors.total,
            newExecuters: stats.executors.newThisMonth,
            topExecuters: stats.executors.top,
        },
    };
};
