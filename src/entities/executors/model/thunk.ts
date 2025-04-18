import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Executor} from './types';
import {ExecutorApi} from '../api';
import {mapExecutorDTO} from '../api/mapping';
import {toast} from 'react-toastify';

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
    number | string,
    AppThunkParams
>(
    'executors/deleteExecutorAndRefresh',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            await ExecutorApi.delete(`${id}`);

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
            await ExecutorApi.changePriority(data.id, {
                priority: Number(data.priority),
            });

            dispatch(fetchExecutors());
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Ошибка');
            return rejectWithValue(error.response?.data?.message || 'Ошибка');
        }
    }
);
