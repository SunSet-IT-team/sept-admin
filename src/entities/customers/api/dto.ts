import {ServerAns} from '../../../shared/types/share';

/**
 * DTO для получения всех заказов
 */
export type GetAllDto = ServerAns<{
    items: CustomerDTO[];

    limit: number;
    page: number;
    total: number;
    pages: number;
}>;

/**
 * Покупатель
 */
export type CustomerDTO = {
    email: string;
    name: string;
    id: number;
    profile: ProfileDTO;
    role: 'CUSTOMER';
};

/**
 * Профиль
 */
export type ProfileDTO = {
    addresses: AddressDTO[];
    ordersCount: number;
    phone: string;
    priority: number;
    profilePhoto: string | null;
};

/**
 * Адресс
 */
export type AddressDTO = {
    id: number;
    value: string;
};
