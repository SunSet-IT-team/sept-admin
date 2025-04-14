import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Executor} from './types';
import {ExecutorApi} from '../api';
import {mapExecutorDTO} from '../api/mapping';

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

        const {data} = await ExecutorApi.getAll();

        res.executors = data.data.items.map((el) => mapExecutorDTO(el));

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
