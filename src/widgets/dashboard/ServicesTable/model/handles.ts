import {GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import {useCallback} from 'react';
import {ServiceTableItem} from '../model/types';
import {
    changeServiceAndRefresh,
    deleteServiceAndRefresh,
    fetchServices,
} from '../../../../entities/service/model/thunk';
import {Sort} from '../../../../shared/types/share';
import {getChangedFieldName} from '../../../../shared/utils/table';
import {useAppDispatch} from '../../../../app/store/hook';

/**
 * Обработчики различных событий
 */
export const useServiceTableHandles = () => {
    const dispatch = useAppDispatch();

    /**
     * Обработчик клика для удаления
     */
    const handleClickDelete = useCallback((data: ServiceTableItem) => {
        dispatch(deleteServiceAndRefresh(data.id));
    }, []);

    /**
     * Работа с пагинацией
     */
    const handlePaginationModelChange = (model: GridPaginationModel) => {
        dispatch(
            fetchServices({
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
            fetchServices({
                sort: sort,
            })
        );
    };

    /**
     * Изменение приоритета
     */
    const handleProcessRowUpdate = async (
        newRow: ServiceTableItem,
        oldRow: ServiceTableItem
    ) => {
        const changedType = getChangedFieldName(newRow, oldRow);

        if (changedType !== 'priority') return newRow;

        dispatch(
            changeServiceAndRefresh({id: newRow.id, priority: newRow.priority})
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
