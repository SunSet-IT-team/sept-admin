import {ServerAns} from '../../../shared/types/share';
import {ExecutorServiceType, ExecutorStats} from '../model/types';

/**
 * DTO для получения всех исполнителей
 */
export type GetAllDto = ServerAns<{
    items: ExecutorDTO[];

    limit: number;
    page: number;
    total: number;
    pages: number;
}>;

/**
 * DTO для получения статистики
 */
export type GetStatsDto = ServerAns<ExecutorStats>;

/**
 * DTO исполнителя
 */
export type ExecutorDTO = {
    id: number;
    email: string;
    name: string;
    role: 'EXECUTOR';
    profile: ProfileDTO;
    ordersCount: number;
    reviewCount: number;
};

/**
 * DTO Профиля
 */
export type ProfileDTO = {
    about: string;
    city: string | null;
    companyName: string;
    completedOrders: number;
    description: null | string;
    experience: number;
    id: number;
    phone: string;
    priority: number;
    profilePhoto: FileDTO | null;
    licenseDoc: FileDTO | null;
    registrationDoc: FileDTO | null;
    rating: number;
    workFormat: ExecutorServiceType;
};

/**
 * Файл, который приходит с сервера
 */
export interface FileDTO {
    id: number;
    type?: string;
    url: string;
}
