import {Box, IconButton} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Visibility, Delete} from '@mui/icons-material';

// Тип данных для строк таблицы
interface Order {
    id: number;
    customer: string;
    date: string;
    service: string;
    executor: string;
    status: string;
}

const columns: GridColDef<Order>[] = [
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
                    onClick={() => console.log('Edit', params.row)}
                >
                    <Visibility fontSize="small" />
                </IconButton>
                <IconButton
                    color="error"
                    onClick={() => console.log('Delete', params.row)}
                >
                    <Delete fontSize="small" />
                </IconButton>
            </>
        ),
    },
];

// Пример данных
const rows: Order[] = [
    {
        id: 1,
        customer: '+79484657734',
        date: '01.01.2024',
        service: 'очистка септика',
        executor: 'ООО Септик',
        status: ' в работе',
    },
    {
        id: 2,
        customer: '+79484657734',
        date: '01.01.2024',
        service: 'установка септика',
        executor: 'ООО Септик',
        status: ' в работе',
    },
    {
        id: 3,
        customer: '+79484657734',
        date: '01.01.2024',
        service: 'очистка септика',
        executor: 'ООО Септик',
        status: ' в работе',
    },
    {
        id: 4,
        customer: '+79484657734',
        date: '01.01.2024',
        service: 'установка септика',
        executor: 'ООО Септик',
        status: ' в работе',
    },
    {
        id: 5,
        customer: '+79484657734',
        date: '01.01.2024',
        service: 'очистка септика',
        executor: 'ООО Септик',
        status: ' в работе',
    },
];

/**
 * Страница заказов
 */
const OrdersPage = () => {
    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
                disableRowSelectionOnClick
                disableColumnSelector
                disableColumnFilter
                disableDensitySelector
                disableColumnResize
                disableMultipleRowSelection
                checkboxSelection={false} // Отключаем выбор строк
            />
        </Box>
    );
};

export default OrdersPage;
