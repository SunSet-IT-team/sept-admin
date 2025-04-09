import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {useAppSelector} from '../../../../app/store/hook';
import {useServiceTableHandles} from '../model/handles';
import {
    getOrders,
    getOrdersPagination,
    getOrdersSort,
} from '../../../../entities/orders/model/selectors';
import {getOrdersTableColumns} from '../model/columns';

/**
 * Таблица Заказов
 */
const OrdersTable = () => {
    const orders = useAppSelector(getOrders);
    const pagination = useAppSelector(getOrdersPagination);
    const sort = useAppSelector(getOrdersSort);

    /**
     * Получение данных для таблицы
     */
    const handles = useServiceTableHandles();

    const paginationModel = {
        page: pagination.currentPage,
        pageSize: pagination.perPage,
    };

    const columns = getOrdersTableColumns({
        handleClickDelete: handles.handleClickDelete,
        handleClickView: (data) => {},
    });

    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <DataGrid
                rows={orders}
                columns={columns}
                paginationMode="server"
                rowCount={pagination.total}
                sortModel={sort ? [sort] : undefined}
                onSortModelChange={handles.handleSortModelChange}
                paginationModel={paginationModel}
                onPaginationModelChange={handles.handlePaginationModelChange}
                pageSizeOptions={[1, 5, 10, 25]}
                loading={pagination.isLoading}
                processRowUpdate={handles.handleProcessRowUpdate}
                disableColumnFilter
                disableColumnSelector
            />
        </Box>
    );
};

export default OrdersTable;
