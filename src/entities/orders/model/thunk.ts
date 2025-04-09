import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams, Sort} from '../../../shared/types/share';
import {Order, OrderStatus} from './types';

type FetchOrdersParam = {
    page?: number;
    perPage?: number;
    sort?: Sort | null;
};

export type FetchedOrders = {
    orders: Order[];
    pagination: {
        total?: number;
        page?: number;
        perPage?: number;
    };
    sort?: Sort | null;
};

/**
 * Запрашиваем заказы
 */
export const fetchOrders = createAsyncThunk<
    FetchedOrders,
    FetchOrdersParam | undefined,
    AppThunkParams
>('orders/fetchOrders', async (data, {getState, rejectWithValue}) => {
    try {
        const res: FetchedOrders = {
            orders: [],
            pagination: {},
        };

        const params = data ? data : {};

        const state = getState().service;

        // Добавляем параметры пагинации
        if (params.page) {
            res.pagination.page = params.page;
        } else {
            params.page = state.pagination.currentPage;
        }
        if (params.perPage) {
            res.pagination.perPage = params.perPage;
        } else {
            params.perPage = state.pagination.perPage;
        }

        // Добавляем сортировку
        if (params.sort !== undefined) {
            res.sort = params.sort;
        } else {
            params.sort = state.sort;
        }

        // const response = await OrderApi.getAll();
        // const services: Service[] = response.data.map((el) => ({
        //     name: el.name,
        //     id: el.id,
        //     priority: el.priority,
        // }));

        // Заглушка
        const response: Order[] = await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        // Сохраняем услуги
        const orders: Order[] = response.map((el) => ({
            id: 5,
            customer: '+79484657734',
            date: '01.01.2024',
            service: 'очистка септика',
            executor: 'ООО Септик',
            status: OrderStatus.DONE,
            priority: 100,
            city: 'Москва',
        }));

        res.orders = orders;

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
