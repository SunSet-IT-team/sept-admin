import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    changeOrderAndRefresh,
    deleteOrderAndRefresh,
    fetchOrders,
} from './thunk';
import {OrderSlice} from './types';
import {Filter, Sort} from '../../../shared/types/share';

const initialState: OrderSlice = {
    orders: [],

    pagination: {
        isLoading: false,
        total: 5,
        currentPage: 0,
        perPage: 5,
    },

    sort: null,
    filters: [],
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        /**
         * Обновление пагинации
         */
        setOrdersPagination(
            state,
            action: PayloadAction<{page: number; perPage: number}>
        ) {
            state.pagination.currentPage = action.payload.page;
            state.pagination.perPage = action.payload.perPage;
        },

        /**
         * Обновление сортировка
         */
        setOrdersSort(state, action: PayloadAction<{sort: Sort | null}>) {
            state.pagination.currentPage = 0;
            state.sort = action.payload.sort;
        },

        /**
         * Обновить фильтр
         */
        setOrdersFilters(state, action: PayloadAction<Filter | Filter[]>) {
            let filters = action.payload;

            // Преобразовываем чтобы можно было передавать и один фильтр
            if (!Array.isArray(filters)) filters = [filters];

            filters.map((filter) => {
                const currentFilter = state.filters.find(
                    (f) => f.name === filter.value
                );

                // Если есть фильтрили удаляем
                if (currentFilter) {
                    if (filter.value) {
                        // Значит меняем значение
                        currentFilter.value = filter.value;
                    } else {
                        // Или удаляем
                        state.filters = state.filters.filter(
                            (f) => f.name === filter.value
                        );
                    }
                }

                // В другом случае - добавляем
                state.filters.push(filter);
            });
        },

        /**
         * Сбросить фильтры
         */
        resetFilters(state) {
            state.filters = [];
        },
    },
    extraReducers: (builder) => {
        /**
         * fetchOrders
         */
        builder.addCase(fetchOrders.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.pagination.isLoading = false;
            state.pagination.total = action.payload.total;
            state.orders = action.payload.orders;
        });

        /**
         * deleteOrderAndRefresh
         */
        builder.addCase(deleteOrderAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });

        /**
         * changeOrderAndRefresh
         */
        builder.addCase(changeOrderAndRefresh.pending, (state) => {
            state.pagination.isLoading = true;
        });
    },
});

export const {
    setOrdersPagination,
    setOrdersSort,
    setOrdersFilters,
    resetFilters,
} = orderSlice.actions;

export const ordersReducer = orderSlice.reducer;
