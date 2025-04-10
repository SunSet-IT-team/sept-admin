import {ServerAns} from '../../../shared/types/share';

/**
 * DTO для получения данных админа
 */
export type AdminDto = ServerAns<{
    id: number;
    email: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    success: boolean;
}>;

/**
 * DTO получения токена
 */
export type AuthDTO = ServerAns<{token: string}>;
