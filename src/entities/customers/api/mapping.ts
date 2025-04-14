import {Address, Customer} from '../model/types';
import {AddressDTO, CustomerDTO} from './dto';

/**
 * Перевод DTO в нормальный вид
 * для заказчиков
 */
export const mapServerCustomer = (customer: CustomerDTO): Customer => {
    return {
        id: `${customer.id}`,
        name: customer.name,
        email: customer.email,
        phone: customer.profile.phone,
        profileImage: customer.profile.profilePhoto || '',
        addresses: customer.profile.addresses.map((el) => mapServerAddress(el)),
        orderQty: customer.profile.ordersCount,
        priority: customer.profile.priority,
    };
};

/**
 * Перевод DTO в нормальный вид
 * для адресов
 */
export const mapServerAddress = (address: AddressDTO): Address => {
    return {
        id: `${address.id}`,
        address: address.value,
    };
};
