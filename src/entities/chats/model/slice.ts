import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchChats} from './thunk';
import {ChatSlice, Message} from './types';

import {Sort} from '../../../shared/types/share';
import {placeholderExecutor} from '../../executors/model/slice';

const initialState: ChatSlice = {
    chats: [
        {
            id: 1,
            interlocutor: placeholderExecutor,
            messages: [
                {
                    id: 1,
                    chatId: 1,
                    content: 'Привет холодный мир',
                    senderId: 1,
                    createdAt: '10:10',
                    readed: true,
                },
                {
                    id: 2,
                    chatId: 1,
                    content:
                        'Добрый день, хочу уточнить детали: как будет проводиться сборка',
                    senderId: 1,
                    createdAt: '10:10',
                    readed: true,
                },
                {
                    id: 3,
                    chatId: 1,
                    content: 'Добрый, да, конечно, сейчас расскажем',
                    senderId: 2,
                    createdAt: '10:10',
                    readed: true,
                },
                {
                    id: 4,
                    chatId: 1,
                    content: 'Спасибо!',
                    senderId: 1,
                    createdAt: '10:10',
                    readed: false,
                },
            ],
        },
    ],

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

        /**
         * Подтверждение отправки сообщения
         */
        sendedMessage(
            state,
            action: PayloadAction<{timeId: String; message: Message}>
        ) {
            const message = action.payload.message;
            const timeId = action.payload.timeId;
            const chat = state.chats.find((c) => c.id === message.chatId);
            if (chat) {
                chat.messages = chat.messages.filter((m) => m.id != timeId);
                chat.messages.push(message);
            }
        },

        /**
         * Пришло сообщение
         */
        receivedMessage(state, action: PayloadAction<Message>) {
            const message = action.payload;
            const chat = state.chats.find((c) => c.id === message.chatId);

            if (chat) chat.messages.push(message);
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
        });
    },
});

export const {
    setChatsPagination,
    setChatsSort,
    sendedMessage,
    receivedMessage,
} = chatSlice.actions;

export const chatsReducer = chatSlice.reducer;
