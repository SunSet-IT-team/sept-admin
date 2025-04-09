import api from '../../../app/api';
import {GetStatsDto} from './dto';
import {StatsApiMethods} from './types';

/**
 * API для взаимодействия с исполнителями
 */
export const StatsApi: StatsApiMethods = {
    getStats: () => api.get<GetStatsDto>(`/stats`),
};
