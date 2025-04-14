import {ServerAns} from '../../../shared/types/share';

/**
 * DTO для получения данных админа
 */
export type AdminDto = ServerAns<AdminDTO>;

/**
 * DTO получения токена
 */
export type AuthDTO = ServerAns<{
    token: string;
    user: AdminDTO;
}>;

/**
 * DTO админа
 */
export type AdminDTO = {
    email: string;
    firstName: string | null;
    id: number;
    lastName: string | null;
    profile: string | null;
    role: string;
};
