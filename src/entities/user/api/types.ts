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

    /**
     * Сбросить пароль
     */
    recovery: (
        param: UserApiRecoveryParams
    ) => AxiosPromise<ServerAns<{token: string}>>;
}

/**
 * Параметры для авторизации
 */
export type UserApiAuthParams = {
    email: string;
    password: string;
};

/**
 * Параметры для сброса пароля
 */
export type UserApiRecoveryParams = {
    code: string;
    newPassword: string;
    confirmPassword: string;
};
