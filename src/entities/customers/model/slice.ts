import {createSlice} from '@reduxjs/toolkit';
import {
    changeCustomerAndRefresh,
    deleteCustomerAndRefresh,
    fetchCustomers,
} from './thunk';
import {CustomersSlice} from './types';
import {Customer} from '../../customers/model/types';

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
const placeholderCustomer2: Customer = {
    id: 10,
    priority: 100,
    name: 'Ип иванов',
    email: 'test@mail.ru',
    phone: '890090099939',
    profileImage: '',
    orderQty: 10,
    addresses: [
        {
            id: 1,
            address: 'Ул. Пушкина дом колотушкина',
        },
    ],
};

const initialState: CustomersSlice = {
    customers: [placeholderCustomer, placeholderCustomer2],
    isLoading: false,
};

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /**
         * fetchCustomers
         */
        builder.addCase(fetchCustomers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.isLoading = false;
        });

        /**
         * deleteCustomerAndRefresh
         */
        builder.addCase(deleteCustomerAndRefresh.pending, (state) => {
            state.isLoading = true;
        });

        /**
         * changeCustomerAndRefresh
         */
        builder.addCase(changeCustomerAndRefresh.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export const customersReducer = customersSlice.reducer;
