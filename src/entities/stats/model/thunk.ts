import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {ExecuterStats, OrderStats} from './types';
import {StatsApi} from '../api';
import {mapStatsDTO} from '../api/mapping';

export type FetchedStats = {
    orderStats: OrderStats;
    executerStats: ExecuterStats;
};

/**
 * Запрашиваем исполнителей
 */
export const fetchStats = createAsyncThunk<
    FetchedStats,
    undefined,
    AppThunkParams
>('stats/fetchStats', async (_, {rejectWithValue}) => {
    try {
        const {data} = await StatsApi.getStats();

        const mapped = mapStatsDTO(data.data);
        console.log('mapped');
        console.log(mapped);

        return mapped;
    } catch (error: any) {
        console.log(error);

        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});
