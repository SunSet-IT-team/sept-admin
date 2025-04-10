import {WithId} from '../../../shared/types/share';
import {Pagination, Sort} from '../../../shared/types/share';
import {Customer} from '../../customers/model/types';
import {Executor} from '../../executors/model/types';

/**
 * Слайс для хранения данных об услугах
 */
export interface ChatSlice {
    chats: Chat[];
    pagination: Pagination;
    sort: Sort | null;
}

/**
 * Чат
 */
export type Chat = WithId & {
    messages: Message[];
    interlocutor: Executor | Customer;
};

/**
 * Сообщение
 */
export type Message = WithId & {
    chatId: number;
    content?: string;
    fileUrl?: string;
    senderId: number;
    createdAt: string;
};
