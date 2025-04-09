import {RootState} from '../../../app/store';

/**
 * Получить все заказы
 */
export const getOrders = (state: RootState) => state.orders.orders;

/**
 * Получить пагинацию заказов
 */
export const getOrdersPagination = (state: RootState) =>
    state.orders.pagination;

/**
 * Получить сортировку заказов
 */
export const getOrdersSort = (state: RootState) => state.orders.sort;
