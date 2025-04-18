import {ServerAns} from '../../../shared/types/share';
import {Order} from '../model/types';

/**
 * DTO для получения всех заказов
 */
export type GetAllDto = ServerAns<{
    items: Order[];
    limit: number;
    page: number;
    total: number;
    pages: number;
}>;
