import {WithId, WithName, WithPriority} from '../../../shared/types/share';

/**
 * Услуга
 */
export type Service = WithPriority & WithId & WithName;
