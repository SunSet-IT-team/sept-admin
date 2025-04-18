import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppThunkParams} from '../../../shared/types/share';
import {ExecuterStats, OrderStats} from './types';

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
        await new Promise((resolve) => {
            setTimeout(() => resolve([]), 2000);
        });

        return {
            orderStats: {
                // Все заявки
                totalOrders: 360,

                // Закрытые (в статусе done)
                totalOrdersClosed: 330,

                // Открытие (В ожидании или работе)
                totalOrdersOpen: 25,

                // распределение по городам
                cities: [
                    {
                        city: 'Москва',
                        value: 100,
                    },
                    {
                        city: 'Самара',
                        value: 10,
                    },
                ],
            },
            executerStats: {
                totalExecuters: 600,
                newExecuters: 23,
                topExecuters: [],
            },
        };
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка');
    }
});
