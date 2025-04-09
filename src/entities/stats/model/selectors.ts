import {RootState} from '../../../app/store';

/**
 * Получить статистику
 */
export const getStats = (state: RootState) => state.stats;

/**
 * Получить состояние загрузки
 */
export const getStatsIsLoading = (state: RootState) => state.stats.isLoading;
