import {GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import {useCallback} from 'react';
import {Sort} from '../../../../shared/types/share';
import {getChangedFieldName} from '../../../../shared/utils/table';
import {useAppDispatch} from '../../../../app/store/hook';
import {Order} from '../../../../entities/orders/model/types';
import {
    changeOrderAndRefresh,
    deleteOrderAndRefresh,
} from '../../../../entities/orders/model/thunk';
import {
    setOrdersPagination,
    setOrdersSort,
} from '../../../../entities/orders/model/slice';

/**
 * Обработчики различных событий
 */
export const useOrdersTableHandles = () => {
    const dispatch = useAppDispatch();

    /**
     * Обработчик клика для удаления
     */
    const handleClickDelete = useCallback((data: Order) => {
        dispatch(deleteOrderAndRefresh(data.id));
    }, []);

    /**
     * Работа с пагинацией
     */
    const handlePaginationModelChange = (model: GridPaginationModel) => {
        dispatch(
            setOrdersPagination({
                page: model.page,
                perPage: model.pageSize,
            })
        );
    };

    /**
     * Работа с сортировкой
     */
    const handleSortModelChange = (model: GridSortModel) => {
        const sort: Sort | null = model[0]
            ? {...model[0], sort: model[0].sort ?? 'asc'}
            : null;

        dispatch(
            setOrdersSort({
                sort: sort,
            })
        );
    };

    /**
     * Изменение приоритета
     */
    const handleProcessRowUpdate = async (newRow: Order, oldRow: Order) => {
        const changedType = getChangedFieldName(newRow, oldRow);

        if (changedType !== 'priority') return newRow;

        dispatch(
            changeOrderAndRefresh({id: newRow.id, priority: newRow.priority})
        );

        return newRow; // обязательно вернуть новую строку
    };

    return {
        handleClickDelete,
        handlePaginationModelChange,
        handleSortModelChange,
        handleProcessRowUpdate,
    };
};
