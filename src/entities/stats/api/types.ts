import {AxiosPromise} from 'axios';
import {GetStatsDto} from './dto';

/**
 * Интерфейс для API статистики
 */
export interface StatsApiMethods {
    /**
     * Получить статистику
     */
    getStats: () => AxiosPromise<GetStatsDto>;
}
