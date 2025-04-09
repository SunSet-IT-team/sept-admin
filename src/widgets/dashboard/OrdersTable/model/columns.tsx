import {GridColDef} from '@mui/x-data-grid';
import {Delete, Visibility} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {Order} from '../../../../entities/orders/model/types';

type getOrdersTableColumnsParams = {
    handleClickDelete: (data: Order) => void;
    handleClickView: (data: Order) => void;
};

export const getOrdersTableColumns = (
    data: getOrdersTableColumnsParams
): GridColDef<Order>[] => {
    return [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
        },
        {
            field: 'customer',
            headerName: 'Заказчик',
            flex: 1,
        },
        {
            field: 'date',
            headerName: 'Дата',
            flex: 1,
        },
        {
            field: 'service',
            headerName: 'Услуга',
            flex: 1,
        },
        {
            field: 'executor',
            headerName: 'Исполнитель',
            flex: 1,
        },
        {
            field: 'priority',
            headerName: 'Приоритет',
            width: 100,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Статус',
            flex: 1,
        },

        {
            field: 'actions',
            headerName: 'Действия',
            headerAlign: 'right', // Выравнивание заголовка
            align: 'right',
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <IconButton
                        color="primary"
                        onClick={() => data.handleClickView(params.row)}
                    >
                        <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton
                        color="error"
                        onClick={() => data.handleClickDelete(params.row)}
                    >
                        <Delete fontSize="small" />
                    </IconButton>
                </>
            ),
        },
    ];
};
