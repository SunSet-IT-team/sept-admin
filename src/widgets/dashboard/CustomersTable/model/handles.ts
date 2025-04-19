import {useCallback} from 'react';
import {getChangedFieldName} from '../../../../shared/utils/table';
import {useAppDispatch} from '../../../../app/store/hook';
import {
    deleteCustomerAndRefresh,
    changeCustomerAndRefresh,
} from '../../../../entities/customers/model/thunk';
import {Customer} from '../../../../entities/customers/model/types';

/**
 * Обработчики различных событий
 */
export const useCustomerTableHandles = () => {
    const dispatch = useAppDispatch();

    /**
     * Обработчик клика для удаления
     */
    const handleClickDelete = useCallback((data: Customer) => {
        dispatch(deleteCustomerAndRefresh(Number(data.id)));
    }, []);

    /**
     * Изменение приоритета
     */
    const handleProcessRowUpdate = async (
        newRow: Customer,
        oldRow: Customer
    ) => {
        const changedType = getChangedFieldName(newRow, oldRow);

        if (changedType !== 'priority') return newRow;

        dispatch(
            changeCustomerAndRefresh({
                id: Number(newRow.id),
                priority: newRow.priority,
            })
        );

        return newRow; // обязательно вернуть новую строку
    };

    return {
        handleClickDelete,
        handleProcessRowUpdate,
    };
};
