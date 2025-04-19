import {AxiosPromise} from 'axios';
import {GetStatsDTO} from './dto';

/**
 * Интерфейс для API статистики
 */
export interface StatsApiMethods {
    /**
     * Получить статистику
     */
    getStats: () => AxiosPromise<GetStatsDTO>;
}
