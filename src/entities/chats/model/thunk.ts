import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {Chat} from './types';

export type FetchedChats = {
    chats: Chat[];
    total: number;
};

/**
 * Запрашиваем чаты
 */
export const fetchChats = createAsyncThunk<
    FetchedChats,
    undefined,
    AppThunkParams
>('chats/fetchChats', async (_, {getState, rejectWithValue}) => {
    try {
        const res: FetchedChats = {
            chats: [],
            total: 0,
        };

        // Массив параметров для запроса
        const params: any = {};

        const state = getState().chats;

        // Добавляем параметры пагинации
        if (state.pagination.currentPage)
            params.page = state.pagination.currentPage;
        if (state.pagination.perPage) params.perPage = state.pagination.perPage;

        // Добавляем сортировку
        if (state.sort) params.sort = state.sort;

        // const response = await ChatApi.getAll();
        // const services: Service[] = response.data.map((el) => ({
        //     name: el.name,
        //     id: el.id,
        //     priority: el.priority,
        // }));

        // Заглушка
        const response: Chat[] = await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        res.chats = response;

        return res;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});
