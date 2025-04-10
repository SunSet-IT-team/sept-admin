import {GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import {Sort} from '../../../../shared/types/share';
import {useAppDispatch} from '../../../../app/store/hook';
import {
    setChatsPagination,
    setChatsSort,
} from '../../../../entities/chats/model/slice';

/**
 * Обработчики различных событий
 */
export const useChatsTableHandles = () => {
    const dispatch = useAppDispatch();

    /**
     * Работа с пагинацией
     */
    const handlePaginationModelChange = (model: GridPaginationModel) => {
        dispatch(
            setChatsPagination({
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
            setChatsSort({
                sort: sort,
            })
        );
    };

    return {
        handlePaginationModelChange,
        handleSortModelChange,
    };
};
