import {Service} from '../model/types';
import {ServiceDTO} from './dto';

/**
 * Перевод DTO в нормальный вид
 * для услуг
 */
export const mapServerService = (service: ServiceDTO): Service => {
    return {
        priority: service.priority,
        name: service.name,
        id: service.id,
    };
};
