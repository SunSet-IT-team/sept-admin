import {createSlice} from '@reduxjs/toolkit';
import {
    changeCustomerAndRefresh,
    deleteCustomerAndRefresh,
    fetchCustomers,
} from './thunk';
import {CustomersSlice} from './types';

const initialState: CustomersSlice = {
    customers: [],
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
            state.customers = action.payload.customers;
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
