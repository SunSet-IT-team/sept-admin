import {
    WithPriority,
    WithId,
    WithName,
    WithEmail,
    WithPhone,
} from '../../../shared/types/share';

/**
 * Слайс для хранения данных об заказчиках
 */
export interface CustomersSlice {
    customers: Customer[];
    isLoading: boolean;
}

/**
 * Заказчик
 */
export type Customer = WithPriority &
    WithId &
    WithName &
    WithEmail &
    WithPhone & {
        profileImage: string;
        addresses: Address[];
    };

/**
 * Адрес
 */
export type Address = WithId & {
    address: string;
};
