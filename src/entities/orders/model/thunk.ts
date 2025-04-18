import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Order} from './types';
import {OrderApi} from '../api';

export type FetchedOrders = {
    orders: Order[];
    total: number;
};

/**
 * Запрашиваем заказы
 */
export const fetchOrders = createAsyncThunk<
    FetchedOrders,
    undefined,
    AppThunkParams
>('orders/fetchOrders', async (_, {getState, rejectWithValue}) => {
    try {
        const res: FetchedOrders = {
            orders: [],
            total: 0,
        };

        // Массив параметров для запроса
        const params: any = {};

        const state = getState().orders;

        // Добавляем параметры пагинации
        if (state.pagination.currentPage)
            params.page = state.pagination.currentPage;
        if (state.pagination.perPage) params.perPage = state.pagination.perPage;

        // Добавляем сортировку
        if (state.sort) params.sort = state.sort;

        const log = await OrderApi.getAll();

        console.log(log);

        // const services: Service[] = response.data.map((el) => ({
        //     name: el.name,
        //     id: el.id,
        //     priority: el.priority,
        // }));

        // Заглушка
        const response: Order[] = await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        res.orders = response;

        return res;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});

/**
 * Удаление заказа
 */
export const deleteOrderAndRefresh = createAsyncThunk<
    void,
    number,
    AppThunkParams
>('orders/deleteOrderAndRefresh', async (id, {dispatch, rejectWithValue}) => {
    try {
        // Заглушка
        await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        // await ServiceApi.delete(id);

        dispatch(fetchOrders());
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});

type ChangeOrderAndRefresh = {
    id: number;
    priority: number;
};

/**
 * Изменение приоритета заказа
 */
export const changeOrderAndRefresh = createAsyncThunk<
    void,
    ChangeOrderAndRefresh,
    AppThunkParams
>('orders/changeOrderAndRefresh', async (data, {dispatch, rejectWithValue}) => {
    try {
        // Заглушка
        await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        // await ServiceApi.changePriority(data.id, data);

        dispatch(fetchOrders());
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});
