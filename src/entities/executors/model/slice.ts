import {createSlice} from '@reduxjs/toolkit';
import {
    changeExecutorAndRefresh,
    deleteExecutorAndRefresh,
    fetchExecutors,
} from './thunk';
import {ExecutorsSlice} from './types';
import {Executor, ExecutorServiceType} from '../../executors/model/types';

export const placeholderExecutor: Executor = {
    id: '1',
    priority: 100,
    name: 'ООО септики',
    email: 'test@mail.ru',
    phone: '89009009999',
    profileImage: '',
    about: 'Самая лучшая компания',
    experience: '20 лет',
    typeService: ExecutorServiceType.LEGAL_ENTITY,
    city: 'Воронеж',
    orderQty: 20,
    docs: {
        register: '',
        approve: '',
    },
    rating: {
        value: 4.8,
        count: 100,
    },
};

const initialState: ExecutorsSlice = {
    executors: [placeholderExecutor, placeholderExecutor, placeholderExecutor],
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
    },
});

export const executorsReducer = executorsSlice.reducer;
