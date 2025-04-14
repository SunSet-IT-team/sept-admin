import {ServerAns} from '../../../shared/types/share';
import {Executor, ExecutorServiceType} from '../model/types';

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
 * DTO исполнителя
 */
export type ExecutorDTO = {
    id: number;
    email: string;
    name: string;
    role: 'EXECUTOR';
    profile: ProfileDTO;
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
    profilePhoto: null | string;
    rating: number;
    workFormat: ExecutorServiceType;
};
