import {RootState} from '../../../app/store';

/**
 * Получить всех Исполнителей
 */
export const getExecutors = (state: RootState) => state.executors.executors;

/**
 * Получить состояние загрузки
 */
export const getExecutorsIsLoading = (state: RootState) =>
    state.executors.isLoading;
