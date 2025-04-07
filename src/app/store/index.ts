import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../../entities/user/model/slice';
import {serviceReducer} from '../../entities/service/model/slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        service: serviceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
