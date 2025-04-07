import {createSlice} from '@reduxjs/toolkit';
import {Service} from './types';

/**
 * Слайс для хранения данных об услугах
 */
interface ServiceSlice {
    services: Service[];
}

const initialState: ServiceSlice = {
    services: [],
};

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
});

export const serviceReducer = serviceSlice.reducer;
