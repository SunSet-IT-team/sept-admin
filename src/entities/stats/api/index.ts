import api from '../../../app/api';
import {GetStatsDTO} from './dto';
import {StatsApiMethods} from './types';

/**
 * API для взаимодействия с исполнителями
 */
export const StatsApi: StatsApiMethods = {
    getStats: () => api.get<GetStatsDTO>(`/admin/stats`),
};
