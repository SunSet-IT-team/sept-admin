import {WithId, WithPriority} from '../../../shared/types/share';
import {Pagination, Sort} from '../../../shared/types/share';
import {Customer} from '../../customers/model/types';
import {Executor} from '../../executors/model/types';
import {Service} from '../../service/model/types';

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
        customer: Customer;
        date: string;
        service: Service;
        executor: Executor;
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
    openDate: number;
    paymentMethod: string;
    volume: string;
    structureType: string;
    comment: string;
};

/**
 * Отзыв
 */
export type Review = {
    customerId: number;
    rate: 1 | 2 | 3 | 4 | 5;
    text: string;
};
