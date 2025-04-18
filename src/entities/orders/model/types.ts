import {Filter, WithId, WithPriority} from '../../../shared/types/share';
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
    filters: Filter[];
}

/**
 * Заказ
 */
export type Order = WithPriority &
    WithId & {
        address: string;
        customer: Customer | null;
        comment: string;
        payment: string;
        date: string;
        service: Service | null;
        executor: Executor | null;
        status: OrderStatus;
        city: string;
        detailes?: OrderDetailes;
        review: Review | null;
        report: ExecutorReport | null;
        septicVolume: string;
        septicDepth: string;
        septicDistance: string;
        object: string;
    };

/**
 * Статусы заказа
 */
export enum OrderStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    REJECTED = 'REJECTED',
    COMPLETED = 'COMPLETED',
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
    author: Customer;
    id: number | string;
    rating: number;
    text: string;
};

/**
 * Отчёт
 */
export type ExecutorReport = {
    id: number | string;
    files: string[];
    total: number;
};
