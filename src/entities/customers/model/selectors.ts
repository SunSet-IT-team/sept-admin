import {RootState} from '../../../app/store';

/**
 * Получить всех заказчиков
 */
export const getCustomers = (state: RootState) => state.customers.customers;

/**
 * Получить состояние загрузки
 */
export const getCustomersIsLoading = (state: RootState) =>
    state.customers.isLoading;
