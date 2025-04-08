import {createAsyncThunk} from '@reduxjs/toolkit';
import {ServiceApi} from '../api';
import {Service} from './types';
import {AppThunkParams, Sort} from '../../../shared/types/share';

type FetchServicesParam = {
    page?: number;
    perPage?: number;
    sort?: Sort | null;
};

export type FetchedServices = {
    services: Service[];
    pagination: {
        total?: number;
        page?: number;
        perPage?: number;
    };
    sort?: Sort | null;
};

/**
 * Запрашиваем услуги
 */
export const fetchServices = createAsyncThunk<
    FetchedServices,
    FetchServicesParam | undefined,
    AppThunkParams
>('services/fetchServices', async (data, {getState, rejectWithValue}) => {
    try {
        const res: FetchedServices = {
            services: [],
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

        // const response = await ServiceApi.getAll();
        // Заглушка
        const response: Service[] = await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        // const services: Service[] = response.data.map((el) => ({
        //     name: el.name,
        //     id: el.id,
        //     priority: el.priority,
        // }));

        // Сохраняем услуги
        const services: Service[] = response.map((el) => ({
            name: el.name,
            id: el.id,
            priority: el.priority,
        }));

        res.services = services;

        return res;
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || 'Ошибка загрузки заказов'
        );
    }
});

type AddServiceAndRefresh = {
    name: string;
};

/**
 * Добавление услуги
 */
export const addServiceAndRefresh = createAsyncThunk<
    void,
    AddServiceAndRefresh,
    AppThunkParams
>(
    'services/addServiceAndRefresh',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.create(data);

            dispatch(fetchServices());
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Ошибка создания услуги'
            );
        }
    }
);

/**
 * Удаление услуги
 */
export const deleteServiceAndRefresh = createAsyncThunk<
    void,
    number,
    AppThunkParams
>(
    'services/deleteServiceAndRefresh',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.delete(id);

            dispatch(fetchServices());
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Ошибка создания услуги'
            );
        }
    }
);

type ChangeServiceAndRefresh = {
    id: number;
    priority: number;
};

/**
 * Изменение приоритета услуги
 */
export const changeServiceAndRefresh = createAsyncThunk<
    void,
    ChangeServiceAndRefresh,
    AppThunkParams
>(
    'services/changeServiceAndRefresh',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.changePriority(data.id, data);

            dispatch(fetchServices());
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Ошибка создания услуги'
            );
        }
    }
);
