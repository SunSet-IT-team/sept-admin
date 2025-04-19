import {Chat} from 'sunset-chat';
import {Pagination, Sort} from '../../../shared/types/share';

/**
 * Слайс для хранения данных об услугах
 */
export interface ChatSlice {
    chats: Chat[];
    pagination: Pagination;
    sort: Sort | null;
}

/**
 * Сообщение
 */
export type Message = {
    id: number | string;
    chatId: number;
    content?: string;
    fileUrl?: string;
    senderId: number;
    readed: boolean;
    createdAt: string;
    isLoading?: boolean;
};
