import {
    WithPriority,
    WithId,
    WithName,
    WithEmail,
    WithPhone,
} from '../../../shared/types/share';

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
