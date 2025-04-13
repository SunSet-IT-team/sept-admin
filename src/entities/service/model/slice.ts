import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    addServiceAndRefresh,
    changeServiceAndRefresh,
    deleteServiceAndRefresh,
    fetchServices,
} from './thunk';
import {ServiceSlice} from './types';
import {Sort} from '../../../shared/types/share';
import {toast} from 'react-toastify';

/**
 * Слайс для хранения данных об услугах
 */
const initialState: ServiceSlice = {
    services: [],

    pagination: {
        isLoading: false,
        total: 5,
        currentPage: 0,
        perPage: 5,
    },

    sort: null,
};

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        /**
         * Обновление пагинации
         */
        setServicesPagination(
            state,
            action: PayloadAction<{page: number; perPage: number}>
        ) {
            state.pagination.currentPage = action.payload.page;
            state.pagination.perPage = action.payload.perPage;
        },

        /**
         * Обновление сортировка
         */
        setServicesSort(state, action: PayloadAction<{sort: Sort | null}>) {
            state.pagination.currentPage = 0;
            state.sort = action.payload.sort;
        },
    },
    extraReducers: (builder) => {
        /**
         * fetchServices
         */
        builder.addCase(fetchServices.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            console.log(action.payload);

            // Ставим пагинацию
            state.pagination = {
                ...state.pagination,
                ...action.payload.pagination,
            };

            // Ставим сортировку
            if (action.payload.sort !== undefined)
                state.sort = action.payload.sort;

            state.pagination.isLoading = false;
            state.services = action.payload.services;
        });

        builder.addCase(fetchServices.rejected, (state) => {
            state.pagination.isLoading = false;
            toast.error('Ошибка сервера');
        });

        /**
         * addServiceAndRefresh
         */
        builder.addCase(addServiceAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(addServiceAndRefresh.rejected, (state) => {
            state.pagination.isLoading = false;
            toast.error('Ошибка сервера');
        });

        /**
         * deleteServiceAndRefresh
         */
        builder.addCase(deleteServiceAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(deleteServiceAndRefresh.rejected, (state) => {
            state.pagination.isLoading = false;
            toast.error('Ошибка сервера');
        });

        /**
         * changeServiceAndRefresh
         */
        builder.addCase(changeServiceAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(changeServiceAndRefresh.rejected, (state) => {
            state.pagination.isLoading = false;
            toast.error('Ошибка сервера');
        });
    },
});

export const {setServicesPagination, setServicesSort} = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
