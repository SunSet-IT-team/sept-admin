import {createAsyncThunk} from '@reduxjs/toolkit';
import {ServiceApi} from '../api';
import {Service} from './types';
import {Sort} from '../../../shared/types/share';

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
    sort?: Sort;
};

/**
 * Запрашиваем услуги
 */
export const fetchServices = createAsyncThunk<
    FetchedServices,
    FetchServicesParam
>('services/fetchServices', async (data, {rejectWithValue}) => {
    try {
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

        const services: Service[] = response.map((el) => ({
            name: el.name,
            id: el.id,
            priority: el.priority,
        }));

        const res: FetchedServices = {
            services,
            pagination: {},
        };

        // Добавляем параметры пагинации
        if (data.page) res.pagination.page = data.page;
        if (data.perPage) res.pagination.perPage = data.perPage;

        // Добавляем сортировку
        if (data.sort) res.sort = data.sort;
        if (data.sort == null) res.sort = undefined;

        return res;
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || 'Ошибка загрузки заказов'
        );
    }
});
