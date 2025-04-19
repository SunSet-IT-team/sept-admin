import {GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import {useCallback} from 'react';
import {
    changeServiceAndRefresh,
    deleteServiceAndRefresh,
} from '../../../../entities/service/model/thunk';
import {Sort} from '../../../../shared/types/share';
import {getChangedFieldName} from '../../../../shared/utils/table';
import {useAppDispatch} from '../../../../app/store/hook';
import {Service} from '../../../../entities/service/model/types';
import {
    setServicesPagination,
    setServicesSort,
} from '../../../../entities/service/model/slice';

/**
 * Обработчики различных событий
 */
export const useServiceTableHandles = () => {
    const dispatch = useAppDispatch();

    /**
     * Обработчик клика для удаления
     */
    const handleClickDelete = useCallback((data: Service) => {
        dispatch(deleteServiceAndRefresh(Number(data.id)));
    }, []);

    /**
     * Работа с пагинацией
     */
    const handlePaginationModelChange = (model: GridPaginationModel) => {
        dispatch(
            setServicesPagination({
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
            setServicesSort({
                sort: sort,
            })
        );
    };

    /**
     * Изменение приоритета
     */
    const handleProcessRowUpdate = async (newRow: Service, oldRow: Service) => {
        const changedType = getChangedFieldName(newRow, oldRow);

        if (changedType !== 'priority') return newRow;

        const newPriority = Number.isNaN(Number(newRow.priority))
            ? 0
            : Number(newRow.priority);

        dispatch(
            changeServiceAndRefresh({
                id: Number(newRow.id),
                priority: newPriority,
            })
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
