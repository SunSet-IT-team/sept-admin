import {RootState} from '../../../app/store';

/**
 * Получить пользователя
 */
export const getCurrentUser = (state: RootState) => state.user.user;
