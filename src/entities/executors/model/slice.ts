import {createSlice} from '@reduxjs/toolkit';
import {
    changeExecutorAndRefresh,
    deleteExecutorAndRefresh,
    fetchExecutors,
} from './thunk';
import {ExecutorsSlice} from './types';

const initialState: ExecutorsSlice = {
    executors: [],
    isLoading: false,
};

const executorsSlice = createSlice({
    name: 'executors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /**
         * fetchExecutors
         */
        builder.addCase(fetchExecutors.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchExecutors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.executors = action.payload.executors;
        });

        /**
         * deleteExecutorAndRefresh
         */
        builder.addCase(deleteExecutorAndRefresh.pending, (state) => {
            state.isLoading = true;
        });

        /**
         * changeExecutorAndRefresh
         */
        builder.addCase(changeExecutorAndRefresh.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(changeExecutorAndRefresh.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const executorsReducer = executorsSlice.reducer;
