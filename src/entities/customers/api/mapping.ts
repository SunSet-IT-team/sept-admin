import {Address, Customer} from '../model/types';
import {AddressDTO, CustomerDTO} from './dto';

/**
 * Перевод DTO в нормальный вид
 * для заказчиков
 */
export const mapCustomerDTO = (customer: CustomerDTO): Customer => {
    return {
        id: `${customer.id}`,
        name: customer.name,
        email: customer.email,
        phone: customer.profile.phone,
        profileImage: customer.profile.profilePhoto || '',
        addresses: customer.profile.addresses.map((el) => mapAddressDTO(el)),
        orderQty: customer.ordersCount,
        priority: customer.profile.priority,
    };
};

/**
 * Перевод DTO в нормальный вид
 * для адресов
 */
export const mapAddressDTO = (address: AddressDTO): Address => {
    return {
        id: `${address.id}`,
        address: address.value,
    };
};
