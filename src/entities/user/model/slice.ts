import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from './types';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: User | null;
}

const initialState: UserSlice = {
    user: {
        login: 'admin',
        email: 'info@mail.ru',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
