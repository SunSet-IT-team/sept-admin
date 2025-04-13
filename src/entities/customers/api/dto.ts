import {ServerAns} from '../../../shared/types/share';
import {Customer} from '../model/types';

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

export type CustomerDTO = {
    userId: string;
    user: {
        email: string;
        firstName: string;
        lastName: string | null;
        phone: string;
        status: string;
    };
    addresses: AddressDTO[];
};

export type AddressDTO = {
    city: null | string;
    coordinates: null | string;
    id: string;
    isDefault: boolean;
    postalCode: null | string;
    value: string;
};
