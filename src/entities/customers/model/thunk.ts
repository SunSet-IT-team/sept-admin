import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Customer} from './types';
import {CustomerApi} from '../api';
import {mapServerCustomer} from '../api/mapping';

export type FetchedCustomers = {
    customers: Customer[];
    total: number;
};

/**
 * Запрашиваем заказчиков
 */
export const fetchCustomers = createAsyncThunk<
    FetchedCustomers,
    undefined,
    AppThunkParams
>('customers/fetchCustomers', async (_, {rejectWithValue}) => {
    try {
        const res: FetchedCustomers = {
            customers: [],
            total: 0,
        };

        // Массив параметров для запроса
        const params: any = {};

        const {data} = await CustomerApi.getAll();

        if (!data.success) return res;

        const customers = data.data.items.map((el) => mapServerCustomer(el));

        res.customers = customers;

        return res;
    } catch (error: any) {
        console.log(error);

        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});

/**
 * Удаление заказчика
 */
export const deleteCustomerAndRefresh = createAsyncThunk<
    void,
    number,
    AppThunkParams
>(
    'customers/deleteCustomerAndRefresh',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            await CustomerApi.delete(id);

            dispatch(fetchCustomers());
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Ошибка');
        }
    }
);

type ChangeCustomerAndRefresh = {
    id: number;
    priority: number;
};

/**
 * Изменение приоритета заказчика
 */
export const changeCustomerAndRefresh = createAsyncThunk<
    void,
    ChangeCustomerAndRefresh,
    AppThunkParams
>(
    'customers/changeCustomerAndRefresh',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.changePriority(data.id, data);

            dispatch(fetchCustomers());
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Ошибка');
        }
    }
);
