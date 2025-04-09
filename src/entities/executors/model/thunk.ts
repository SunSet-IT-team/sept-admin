import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Executor} from './types';

export type FetchedExecutors = {
    executors: Executor[];
    total: number;
};

/**
 * Запрашиваем исполнителей
 */
export const fetchExecutors = createAsyncThunk<
    FetchedExecutors,
    undefined,
    AppThunkParams
>('executors/fetchExecutors', async (_, {rejectWithValue}) => {
    try {
        const res: FetchedExecutors = {
            executors: [],
            total: 0,
        };

        // Массив параметров для запроса
        const params: any = {};

        // const response = await ExecutorApi.getAll();
        // const services: Service[] = response.data.map((el) => ({
        //     name: el.name,
        //     id: el.id,
        //     priority: el.priority,
        // }));

        // Заглушка
        const response: Executor[] = await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        res.executors = response;

        return res;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});

/**
 * Удаление исполнителя
 */
export const deleteExecutorAndRefresh = createAsyncThunk<
    void,
    number,
    AppThunkParams
>(
    'executors/deleteExecutorAndRefresh',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.delete(id);

            dispatch(fetchExecutors());
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Ошибка');
        }
    }
);

type ChangeExecutorAndRefresh = {
    id: number;
    priority: number;
};

/**
 * Изменение приоритета исполнителя
 */
export const changeExecutorAndRefresh = createAsyncThunk<
    void,
    ChangeExecutorAndRefresh,
    AppThunkParams
>(
    'executors/changeExecutorAndRefresh',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            // Заглушка
            await new Promise((resolve) => {
                setTimeout(() => resolve([]), 2000);
            });

            // await ServiceApi.changePriority(data.id, data);

            dispatch(fetchExecutors());
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Ошибка');
        }
    }
);
