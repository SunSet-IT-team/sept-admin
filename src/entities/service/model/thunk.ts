import {createAsyncThunk} from '@reduxjs/toolkit';
import {ServiceApi} from '../api';
import {Service} from './types';
import {AppThunkParams, Sort} from '../../../shared/types/share';
import {mapServerService} from '../api/mapping';
import {toast} from 'react-toastify';

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
    undefined,
    AppThunkParams
>('services/fetchServices', async (_, {getState, rejectWithValue}) => {
    try {
        const res: FetchedServices = {
            services: [],
            pagination: {},
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

        const {data} = await ServiceApi.getAll();

        res.services = data.data.items.map((el) => mapServerService(el));

        return res;
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || 'Ошибка загрузки заказов'
        );
    }
});

type AddServiceAndRefresh = {
    name: string;
    servicePreview: File;
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
            await ServiceApi.create(data);

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
            await ServiceApi.delete(id);

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
            await ServiceApi.changePriority(data.id, {
                priority: Number(data.priority),
            });

            dispatch(fetchServices());
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Ошибка');
            return rejectWithValue(error.response?.data?.message || 'Ошибка');
        }
    }
);
