import {createSlice} from '@reduxjs/toolkit';
import {Service} from './types';
import {Pagination, Sort} from '../../../shared/types/share';
import {fetchServices} from './thunk';

/**
 * Слайс для хранения данных об услугах
 */
interface ServiceSlice {
    services: Service[];
    pagination: Pagination;
    sort: Sort | null;
}

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
    reducers: {},
    extraReducers: (builder) => {
        /**
         * fetchServices
         */
        builder.addCase(fetchServices.pending, (state) => {
            state.pagination.isLoading = true;
        });
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            // Ставим пагинацию
            if (action.payload.pagination.total)
                state.pagination.total = action.payload.pagination.total;
            if (action.payload.pagination.perPage)
                state.pagination.perPage = action.payload.pagination.perPage;
            if (action.payload.pagination.page)
                state.pagination.currentPage = action.payload.pagination.page;

            state.pagination.isLoading = false;
        });
    },
});

export const serviceReducer = serviceSlice.reducer;
