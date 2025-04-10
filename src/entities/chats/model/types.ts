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
    additionalInfo?: string;
};

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
