import {ServerAns} from '../../../shared/types/share';

/**
 * DTO для получения всех услуг
 */
export type GetAllDto = ServerAns<{
    items: ServiceDTO[];
    limit: number;
    page: number;
    pages: number;
    total: number;
}>;

export type ServiceDTO = {
    id: string;
    name: string;
    priority: number;
};
