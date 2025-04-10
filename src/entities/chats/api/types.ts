import {AxiosPromise} from 'axios';
import {GetAllDto} from './dto';

/**
 * Интерфейс для API чатов
 */
export interface ChatsApiMethods {
    /**
     * Получить все чаты
     */
    getAll: () => AxiosPromise<GetAllDto>;
}
