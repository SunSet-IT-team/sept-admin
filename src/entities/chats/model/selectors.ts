import {RootState} from '../../../app/store';

/**
 * Получить все чаты
 */
export const getChats = (state: RootState) => state.chats.chats;

/**
 * Получить чат по id
 */
export const getChat = (id: number) => (state: RootState) =>
    state.chats.chats.find((el) => el.id == id);

/**
 * Получить пагинацию чатов
 */
export const getChatsPagination = (state: RootState) => state.chats.pagination;

/**
 * Получить сортировку чатов
 */
export const getChatsSort = (state: RootState) => state.chats.sort;
