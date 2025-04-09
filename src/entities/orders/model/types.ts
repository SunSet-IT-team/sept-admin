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
        detailes?: OrderDetailes;
        review?: Review;
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

/**
 * Детали заказа
 */
export type OrderDetailes = {
    openDate: string;
    paymentMethod: string;
    volume: string;
    structureType: string;
    comment: string;
};

/**
 * Отзыв
 */
export type Review = {
    customer: number;
    rate: 1 | 2 | 3 | 4 | 5;
    text: string;
};
