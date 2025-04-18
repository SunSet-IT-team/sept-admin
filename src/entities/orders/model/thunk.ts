import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Order} from './types';
import {OrderApi} from '../api';
import {mapOrderDTO} from '../api/mapping';
import {toast} from 'react-toastify';
import {OrdersApiGetAllParams} from '../api/types';

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
        const params: OrdersApiGetAllParams = {};

        const state = getState().orders;

        // Добавляем параметры пагинации
        if (state.pagination.currentPage)
            params.page = state.pagination.currentPage;
        if (state.pagination.perPage) params.limit = state.pagination.perPage;

        // Добавляем сортировку
        if (state.sort) {
            params.order = state.sort.sort;
            params.sortBy = state.sort.field;
        }

        if (state.filters) {
            state.filters.forEach((filter) => {
                //@ts-ignore
                params[filter.name as keyof Required<OrdersApiGetAllParams>] =
                    filter.value;
            });
        }

        const {data} = await OrderApi.getAll(params);

        res.orders = data.data.items.map((el) => mapOrderDTO(el));
        res.total = data.data.total;
        return res;
    } catch (error: any) {
        console.log(error);

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
        await OrderApi.delete(id);

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
        await OrderApi.changePriority(data.id, {
            priority: Number(data.priority),
        });

        dispatch(fetchOrders());
    } catch (error: any) {
        toast.error(error.response?.data?.message || 'Ошибка');
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});
