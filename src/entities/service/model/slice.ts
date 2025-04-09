import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    addServiceAndRefresh,
    changeServiceAndRefresh,
    deleteServiceAndRefresh,
    fetchServices,
} from './thunk';
import {ServiceSlice} from './types';
import {Sort} from '../../../shared/types/share';

/**
 * Слайс для хранения данных об услугах
 */
const initialState: ServiceSlice = {
    services: [
        {id: 1, name: 'Диагностика', priority: 100},
        {id: 2, name: 'Замена экрана', priority: 100},
        {id: 3, name: 'Замена батареи', priority: 100},
        {id: 4, name: 'Чистка от пыли', priority: 100},
        {id: 5, name: 'Установка ПО', priority: 100},
    ],

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
            // Ставим пагинацию
            state.pagination = {
                ...state.pagination,
                ...action.payload.pagination,
            };

            // Ставим сортировку
            if (action.payload.sort !== undefined)
                state.sort = action.payload.sort;

            state.pagination.isLoading = false;
        });

        /**
         * addServiceAndRefresh
         */
        builder.addCase(addServiceAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });

        /**
         * deleteServiceAndRefresh
         */
        builder.addCase(deleteServiceAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });

        /**
         * changeServiceAndRefresh
         */
        builder.addCase(changeServiceAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });
    },
});

export const {setServicesPagination, setServicesSort} = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
