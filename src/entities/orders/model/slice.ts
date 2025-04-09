import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    changeOrderAndRefresh,
    deleteOrderAndRefresh,
    fetchOrders,
} from './thunk';
import {OrderSlice, OrderStatus} from './types';
import {Service} from '../../service/model/types';
import {Customer} from '../../customers/model/types';
import {Executor, ExecutorServiceType} from '../../executors/model/types';
import {Filter, Sort} from '../../../shared/types/share';

const placeholderService: Service = {
    id: 5,
    name: 'Установка ПО',
    priority: 100,
};

const placeholderCustomer: Customer = {
    id: 1,
    priority: 100,
    name: 'ООО септики',
    email: 'test@mail.ru',
    phone: '89009009999',
    profileImage: '',
    orderQty: 100,
    addresses: [
        {
            id: 1,
            address: 'Ул. Пушкина дом колотушкина',
        },
    ],
};

const placeholderExecutor: Executor = {
    id: 1,
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

const placeholderDate = new Date().getTime();

const initialState: OrderSlice = {
    orders: [
        {
            id: 1,
            customer: placeholderCustomer,
            date: '01.01.2024',
            service: placeholderService,
            executor: placeholderExecutor,
            status: OrderStatus.PROCESS,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 2,
            customer: placeholderCustomer,
            date: '01.01.2024',
            service: placeholderService,
            executor: placeholderExecutor,
            status: OrderStatus.PROCESS,
            priority: 100,
            city: 'Москва',
            review: {
                customerId: 1,
                rate: 5,
                text: 'Test Test Test Test Test Test Test Test ',
            },
            detailes: {
                openDate: placeholderDate,
                paymentMethod: 'Наличные',

                volume: '10kb',
                structureType: 'Тип структуры',
                comment: 'Большой-большой-комментарий',
            },
        },
        {
            id: 3,
            customer: placeholderCustomer,
            date: '01.01.2024',
            service: placeholderService,
            executor: placeholderExecutor,
            status: OrderStatus.CANCELED,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 4,
            customer: placeholderCustomer,
            date: '01.01.2024',
            service: placeholderService,
            executor: placeholderExecutor,
            status: OrderStatus.PROCESS,
            priority: 100,
            city: 'Москва',
        },
        {
            id: 5,
            customer: placeholderCustomer,
            date: '01.01.2024',
            service: placeholderService,
            executor: placeholderExecutor,
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
