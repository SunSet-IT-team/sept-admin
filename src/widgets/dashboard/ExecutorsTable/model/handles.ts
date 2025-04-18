import {useCallback} from 'react';
import {getChangedFieldName} from '../../../../shared/utils/table';
import {useAppDispatch} from '../../../../app/store/hook';
import {Executor} from '../../../../entities/executors/model/types';
import {
    changeExecutorAndRefresh,
    deleteExecutorAndRefresh,
} from '../../../../entities/executors/model/thunk';

/**
 * Обработчики различных событий
 */
export const useExecutorTableHandles = () => {
    const dispatch = useAppDispatch();

    /**
     * Обработчик клика для удаления
     */
    const handleClickDelete = useCallback((data: Executor) => {
        dispatch(deleteExecutorAndRefresh(data.id));
    }, []);

    /**
     * Изменение приоритета
     */
    const handleProcessRowUpdate = async (
        newRow: Executor,
        oldRow: Executor
    ) => {
        const changedType = getChangedFieldName(newRow, oldRow);

        if (changedType !== 'priority') return newRow;

        dispatch(
            changeExecutorAndRefresh({
                id: Number(newRow.id),
                priority: Number(newRow.priority),
            })
        );

        return newRow; // обязательно вернуть новую строку
    };

    return {
        handleClickDelete,
        handleProcessRowUpdate,
    };
};
