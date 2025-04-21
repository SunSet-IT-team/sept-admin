import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {ChatsApi} from '../api';
import {mapChatDTO} from '../api/mapping';
import {Chat} from 'sunset-chat';

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

        const {data} = await ChatsApi.getAll();

        res.chats = data.data.items.map((el) => mapChatDTO(el));

        res.total = res.chats.length;

        return res;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});
