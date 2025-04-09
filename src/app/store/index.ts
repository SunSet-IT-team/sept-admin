import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../../entities/user/model/slice';
import {serviceReducer} from '../../entities/service/model/slice';
import {ordersReducer} from '../../entities/orders/model/slice';
import {executorsReducer} from '../../entities/executors/model/slice';
import {customersReducer} from '../../entities/customers/model/slice';
import {statsReducer} from '../../entities/stats/model/slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        service: serviceReducer,
        orders: ordersReducer,
        executors: executorsReducer,
        customers: customersReducer,
        stats: statsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
