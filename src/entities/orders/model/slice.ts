import {createSlice} from '@reduxjs/toolkit';
import {
    changeOrderAndRefresh,
    deleteOrderAndRefresh,
    fetchOrders,
} from './thunk';
import {OrderSlice, OrderStatus} from './types';

const initialState: OrderSlice = {
    orders: [
        {
            id: 1,
            customer: '+79484657734',
            date: '01.01.2024',
            service: 'очистка септика',
            executor: 'ООО Септик',
            status: OrderStatus.PROCESS,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 2,
            customer: '+79484657734',
            date: '01.01.2024',
            service: 'установка септика',
            executor: 'ООО Септик',
            status: OrderStatus.PROCESS,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 3,
            customer: '+79484657734',
            date: '01.01.2024',
            service: 'очистка септика',
            executor: 'ООО Септик',
            status: OrderStatus.CANCELED,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 4,
            customer: '+79484657734',
            date: '01.01.2024',
            service: 'установка септика',
            executor: 'ООО Септик',
            status: OrderStatus.PROCESS,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 5,
            customer: '+79484657734',
            date: '01.01.2024',
            service: 'очистка септика',
            executor: 'ООО Септик',
            status: OrderStatus.DONE,
            priority: 100,
            city: 'Москва',
        },
    ],

    pagination: {
        isLoading: false,
        total: 5,
        currentPage: 0,
        perPage: 5,
    },

    sort: null,
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /**
         * fetchOrders
         */
        builder.addCase(fetchOrders.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
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

export const ordersReducer = orderSlice.reducer;
