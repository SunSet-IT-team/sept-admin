import {Service} from '../../../../entities/service/model/types';

/**
 * Тип отображения услуги в таблице
 */
export type ServiceTableItem = {
    id: Service['id'];
    name: Service['name'];
    priority: Service['priority'];
};
