import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from './types';
import {logout} from './auth';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: User | null;
}

const initialState: UserSlice = {
    user: null,
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
            logout();
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
