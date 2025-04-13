import {Address, Customer} from '../model/types';
import {AddressDTO, CustomerDTO} from './dto';

/**
 * Перевод DTO в нормальный вид
 * для заказчиков
 */
export const mapServerCustomer = (customer: CustomerDTO): Customer => {
    return {
        id: customer.userId,
        name: customer.user.firstName,
        email: customer.user.email,
        phone: customer.user.phone,
        profileImage: '',
        addresses: customer.addresses.map((el) => mapServerAddress(el)),
        orderQty: 100,
        priority: 100,
    };
};

/**
 * Перевод DTO в нормальный вид
 * для адресов
 */
export const mapServerAddress = (address: AddressDTO): Address => {
    return {
        id: address.id,
        address: address.value,
    };
};
