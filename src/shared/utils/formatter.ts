import {OrderStatus} from '../../entities/orders/model/types';

/**
 * Красивый вывод той или иной информации
 */
export const formatDateToDMY = (date: Date | number) => {
    const dateObj = typeof date === 'number' ? new Date(date) : date;

    // Проверка на валидность даты
    if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
    }

    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();

    return `${day}.${month}.${year}`;
};

/**
 * Вывод даты в формате dd.mm.yyyy
 */
export const mapOrderStatus = (status: OrderStatus) => {
    switch (status) {
        case OrderStatus.PENDING:
            return 'В ожидании';
        case OrderStatus.IN_PROGRESS:
            return 'В работе';
        case OrderStatus.REJECTED:
            return 'Отменён';
        case OrderStatus.COMPLETED:
            return 'Завершён';
        default:
            const neverCheck: never = status;
            return neverCheck;
    }
};
