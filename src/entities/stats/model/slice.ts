import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {StatsSlice} from './types';
import {FetchedStats, fetchStats} from './thunk';

const initialState: StatsSlice = {
    isLoading: true,
    orderStats: {
        // Все заявки
        totalOrders: 0,

        // Закрытые (в статусе done)
        totalOrdersClosed: 0,

        // Открытие (В ожидании или работе)
        totalOrdersOpen: 0,

        // распределение по городам
        cities: [],
    },
    executerStats: {
        totalExecuters: 0,
        newExecuters: 0,
        topExecuters: [],
    },
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /**
         * fetchStats
         */
        builder.addCase(fetchStats.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            fetchStats.fulfilled,
            (state, action: PayloadAction<FetchedStats>) => {
                state.isLoading = false;
                state.orderStats = action.payload.orderStats;
                state.executerStats = action.payload.executerStats;
            }
        );
    },
});

export const statsReducer = statsSlice.reducer;
