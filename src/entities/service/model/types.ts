import {WithId, WithName, WithPriority} from '../../../shared/types/share';
import {Pagination, Sort} from '../../../shared/types/share';

/**
 * Слайс услуг
 */
export interface ServiceSlice {
    services: Service[];
    pagination: Pagination;
    sort: Sort | null;
}

/**
 * Услуга
 */
export type Service = WithPriority & WithId & WithName;
