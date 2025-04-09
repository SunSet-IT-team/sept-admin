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
import {useState} from 'react';
import {OrderModal} from '../../../modals/OrderModal';
import {Order} from '../../../../entities/orders/model/types';

/**
 * Таблица Заказов
 */
const OrdersTable = () => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

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
        handleClickView: (data) => {
            setSelectedOrder(data);
        },
    });

    return (
        <>
            <Box sx={{height: 500, width: '100%', mt: 3}}>
                <DataGrid
                    rows={orders}
                    columns={columns}
                    paginationMode="server"
                    rowCount={pagination.total}
                    sortModel={sort ? [sort] : undefined}
                    onSortModelChange={handles.handleSortModelChange}
                    paginationModel={paginationModel}
                    onPaginationModelChange={
                        handles.handlePaginationModelChange
                    }
                    pageSizeOptions={[1, 5, 10, 25]}
                    loading={pagination.isLoading}
                    processRowUpdate={handles.handleProcessRowUpdate}
                    disableColumnFilter
                    disableColumnSelector
                />
            </Box>

            <OrderModal
                open={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
                order={selectedOrder}
            />
        </>
    );
};

export default OrdersTable;
