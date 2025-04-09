import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Customer} from './types';

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

        // const response = await CustomerApi.getAll();
        // const services: Service[] = response.data.map((el) => ({
        //     name: el.name,
        //     id: el.id,
        //     priority: el.priority,
        // }));

        // Заглушка
        const response: Customer[] = await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        res.customers = response;

        return res;
    } catch (error: any) {
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
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.delete(id);

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
