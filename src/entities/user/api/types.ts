import {AxiosPromise} from 'axios';
import {ServerAns} from '../../../shared/types/share';

/**
 * Интерфейс для API статистики
 */
export interface UserApiMethods {
    /**
     * Авторизоваться
     */
    auth: (
        param: UserApiAuthParams
    ) => AxiosPromise<ServerAns<{token: string}>>;

    /**
     * Получить информацию о себе
     */
    getMe: () => AxiosPromise<void>;
}

/**
 * Параметры для авторизации
 */
export type UserApiAuthParams = {
    email: string;
    password: string;
};
