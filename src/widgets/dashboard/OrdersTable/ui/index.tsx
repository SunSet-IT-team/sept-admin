import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {ruRU} from '@mui/x-data-grid/locales';
import {useAppDispatch, useAppSelector} from '../../../../app/store/hook';
import {useOrdersTableHandles} from '../model/handles';
import {
    getOrders,
    getOrdersFilters,
    getOrdersPagination,
    getOrdersSort,
} from '../../../../entities/orders/model/selectors';
import {getOrdersTableColumns} from '../model/columns';
import {useEffect, useState} from 'react';
import {OrderModal} from '../../../modals/OrderModal';
import {Order} from '../../../../entities/orders/model/types';
import {fetchOrders} from '../../../../entities/orders/model/thunk';
import {OrdersFilter} from '../../../../feature/OrderFilters';

/**
 * Таблица Заказов
 */
const OrdersTable = () => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const orders = useAppSelector(getOrders);
    const pagination = useAppSelector(getOrdersPagination);
    const sort = useAppSelector(getOrdersSort);
    const filters = useAppSelector(getOrdersFilters);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchOrders());

        return () => fetching.abort();
    }, [pagination.currentPage, pagination.perPage, dispatch, sort, filters]);

    /**
     * Получение данных для таблицы
     */
    const handles = useOrdersTableHandles();

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
                <OrdersFilter />
                <DataGrid
                    rows={orders}
                    columns={columns}
                    localeText={
                        ruRU.components.MuiDataGrid.defaultProps.localeText
                    }
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
