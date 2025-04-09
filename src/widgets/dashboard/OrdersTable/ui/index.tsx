import {Box, Button} from '@mui/material';
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

/**
 * Таблица Заказов
 */
const OrdersTable = () => {
    const [modalOpen, setModalOpen] = useState(false);
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
            <Button onClick={() => setModalOpen(true)}>Показать детали</Button>

            <OrderModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                orderDetails={{
                    number: '12345',
                    executor: 'ООО Септик',
                    openDate: '01.01.2024',
                    status: 'в работе',
                    paymentMethod: 'наличные',
                    volume: '1.5 м.куб.',
                    structureType: 'СептоБак БИО',
                }}
                customerDetails={{
                    address: 'Москва, Садовая, 6, кв. 13',
                    phone: '88000000000',
                    name: 'Светлана',
                }}
                comment={{
                    text: 'Текст комментария...\nМногострочный текст...',
                }}
                review={{
                    text: 'Текст отзыва...\nМногострочный текст...',
                }}
            />
        </>
    );
};

export default OrdersTable;
