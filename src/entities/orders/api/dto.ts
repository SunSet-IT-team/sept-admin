import {ServerAns} from '../../../shared/types/share';
import {CustomerDTO} from '../../customers/api/dto';
import {ExecutorDTO, FileDTO} from '../../executors/api/dto';
import {Order, OrderStatus} from '../model/types';

/**
 * DTO для получения всех заказов
 */
export type GetAllDto = ServerAns<{
    items: OrderDTO[];
    limit: number;
    page: number;
    total: number;
    pages: number;
}>;

/**
 * DTO Заказа
 */
export type OrderDTO = {
    address: string;
    city: string;
    comment: string | null;
    customer: CustomerDTO;
    distanceToSeptic: number;
    executor: ExecutorDTO;
    id: number;
    objectType: string;
    paymentMethod: string;
    price: number | null;
    priority: number;
    customerReview: ReviewDTO;
    reports: ReportDTO[];
    septicConstructionType: string;
    septicDepth: number;
    septicVolume: number;
    service: ServiceDTO | null;
    orderStaus: OrderStatus;
    status: OrderStatus;
    workDate: string;
};

/**
 * DTO Адрессa
 */
export type AddressDTO = {
    id: number;
    value: string;
};

/**
 * DTO Услуги
 */
export type ServiceDTO = {
    id: string;
    name: string;
    priority: number;
};

/**
 * DTO отзыва
 */
export type ReviewDTO = {
    author: CustomerDTO;
    id: number;
    rating: number;
    text: string;
};

export type ReportDTO = {
    files: FileDTO[];
    total: number;
    text: string;
    id: number;
};
