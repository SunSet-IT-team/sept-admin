import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchChats} from './thunk';
import {ChatSlice, Message} from './types';

import {Sort} from '../../../shared/types/share';

const initialState: ChatSlice = {
    chats: [],

    pagination: {
        isLoading: false,
        total: 5,
        currentPage: 0,
        perPage: 5,
    },

    sort: null,
};

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        /**
         * Обновление пагинации
         */
        setChatsPagination(
            state,
            action: PayloadAction<{page: number; perPage: number}>
        ) {
            state.pagination.currentPage = action.payload.page;
            state.pagination.perPage = action.payload.perPage;
        },

        /**
         * Обновление сортировка
         */
        setChatsSort(state, action: PayloadAction<{sort: Sort | null}>) {
            state.pagination.currentPage = 0;
            state.sort = action.payload.sort;
        },
    },
    extraReducers: (builder) => {
        /**
         * fetchChats
         */
        builder.addCase(fetchChats.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(fetchChats.fulfilled, (state, action) => {
            state.pagination.isLoading = false;
            state.pagination.total = action.payload.total;
            state.chats = action.payload.chats;
        });
    },
});

export const {setChatsPagination, setChatsSort} = chatSlice.actions;

export const chatsReducer = chatSlice.reducer;
