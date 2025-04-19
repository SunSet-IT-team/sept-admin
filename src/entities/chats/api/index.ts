import api from '../../../app/api';
import {GetAllDto} from './dto';
import {ChatsApiMethods} from './types';

/**
 * API для взаимодействия с услугами
 */
export const ChatsApi: ChatsApiMethods = {
    getAll: () => api.get<GetAllDto>(`/chat/support/admin`),
};
