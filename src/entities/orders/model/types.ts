import {WithId, WithPriority} from '../../../shared/types/share';
import {Pagination, Sort} from '../../../shared/types/share';

/**
 * Слайс для хранения данных об услугах
 */
export interface OrderSlice {
    orders: Order[];
    pagination: Pagination;
    sort: Sort | null;
}

/**
 * Заказ
 */
export type Order = WithPriority &
    WithId & {
        customer: string;
        date: string;
        service: string;
        executor: string;
        status: OrderStatus;
        city: string;
    };

/**
 * Статусы заказа
 */
export enum OrderStatus {
    WAITING = 'WAITING',
    PROCESS = 'PROCESS',
    CANCELED = 'CANCELED',
    DONE = 'DONE',
}
