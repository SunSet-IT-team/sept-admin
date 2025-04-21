import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {ruRU} from '@mui/x-data-grid/locales';
import {useAppDispatch, useAppSelector} from '../../../../app/store/hook';
import {useChatsTableHandles} from '../model/handles';
import {
    getChats,
    getChatsPagination,
    getChatsSort,
} from '../../../../entities/chats/model/selectors';
import {getChatsTableColumns} from '../model/columns';
import {useEffect} from 'react';
import {fetchChats} from '../../../../entities/chats/model/thunk';
import {useNavigate} from 'react-router-dom';
import {SlugPages} from '../../../../app/routes/pages';

/**
 * Таблица Заказов
 */
const ChatsTable = () => {
    const chats = useAppSelector(getChats);
    const pagination = useAppSelector(getChatsPagination);
    const sort = useAppSelector(getChatsSort);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const fetching = dispatch(fetchChats());

        return () => fetching.abort();
    }, [pagination.currentPage, pagination.perPage, dispatch, sort]);

    /**
     * Получение данных для таблицы
     */
    const handles = useChatsTableHandles();

    const paginationModel = {
        page: pagination.currentPage,
        pageSize: pagination.perPage,
    };

    const columns = getChatsTableColumns({
        handleClickView: (data) => {
            navigate(`/${SlugPages.CHAT}/${data.id}`);
        },
    });

    return (
        <>
            <Box sx={{height: 500, width: '100%', mt: 3}}>
                <DataGrid
                    rows={chats}
                    columns={columns}
                    localeText={
                        ruRU.components.MuiDataGrid.defaultProps.localeText
                    }
                    // paginationMode="server"
                    // rowCount={pagination.total}
                    // sortModel={sort ? [sort] : undefined}
                    // onSortModelChange={handles.handleSortModelChange}
                    // paginationModel={paginationModel}
                    // onPaginationModelChange={
                    //     handles.handlePaginationModelChange
                    // }
                    pageSizeOptions={[1, 5, 10, 25]}
                    loading={pagination.isLoading}
                    disableColumnFilter
                    disableColumnSelector
                />
            </Box>
        </>
    );
};

export default ChatsTable;
