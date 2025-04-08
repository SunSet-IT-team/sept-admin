import {Service} from '../../../../entities/service/model/types';
import {ServiceTableItem} from './types';

/**
 * Трансформирует массив услуг в массив услуг для отображения
 */
export const prepareServicesToTable = (
    services: Service[]
): ServiceTableItem[] => {
    return services.map((s) => {
        return {id: s.id, name: s.name, priority: s.priority};
    });
};
