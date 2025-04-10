import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from './types';
import {logout} from './auth';
import {fetchAdminData} from './thunk';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: User | null;
    isInited: boolean;
    isLoading: boolean;
}

const initialState: UserSlice = {
    user: null,
    isInited: false,
    isLoading: true,
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
    extraReducers: (builder) => {
        /**
         * fetchAdminData
         */
        builder.addCase(
            fetchAdminData.fulfilled,
            (state, action: PayloadAction<User | null>) => {
                state.user = action.payload;
                state.isInited = true;
                state.isLoading = false;
            }
        );

        builder.addCase(fetchAdminData.rejected, (state) => {
            state.user = null;
            state.isInited = true;
            state.isLoading = false;
        });
    },
});

export const {setUser, clearUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
