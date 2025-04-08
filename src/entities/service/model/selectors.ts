import {RootState} from '../../../app/store';

/**
 * Получить все услуги
 */
export const getServices = (state: RootState) => state.service.services;

/**
 * Получить пагинацию услуг
 */
export const getServicesPagination = (state: RootState) =>
    state.service.pagination;

/**
 * Получить сортировку услуг
 */
export const getServicesSort = (state: RootState) => state.service.sort;
