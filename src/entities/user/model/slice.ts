import {createSlice, PayloadAction} from '@reduxjs/toolkit';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: string | null;
}

const initialState: UserSlice = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string | null>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
