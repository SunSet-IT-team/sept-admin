import {createAsyncThunk} from '@reduxjs/toolkit';
import {userApi} from '../api';
import {User} from './types';
import {AppThunkParams} from '../../../shared/types/share';

/**
 * Запрашиваем данные об админе
 */
export const fetchAdminData = createAsyncThunk<
    User | null,
    undefined,
    AppThunkParams
>('user/fetchAdminData', async (_, {rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token');

        if (!token) return null;

        const {data} = await userApi.getMe();

        // Значит ошибка
        if (data.error) return null;

        const adminData: User = {
            id: data.data.id,
            email: data.data.email,
            login: 'admin',
        };

        return adminData;
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || 'Ошибка загрузки заказов'
        );
    }
});
