import {Box, IconButton} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Visibility, Delete} from '@mui/icons-material';

// Тип данных для строк таблицы
interface Executor {
    id: number;
    email: string;
    name: string;
    phone: string;
    orderQty: number;
}

const columns: GridColDef<Executor>[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
    },
    {
        field: 'email',
        headerName: 'E-mail',
        flex: 1,
    },
    {
        field: 'name',
        headerName: 'Наименование',
        flex: 1,
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        flex: 1,
    },
    {
        field: 'orderQty',
        headerName: 'Сдано заявок',
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
const rows: Executor[] = [
    {
        id: 1,
        email: 'info@mail.ru',
        name: 'Смирнов Сергей Иванович',
        phone: '88000000000',
        orderQty: 20,
    },
    {
        id: 2,
        email: 'info@mail.ru',
        name: 'ООО Септик +',
        phone: '88000000000',
        orderQty: 0,
    },
    {
        id: 3,
        email: 'info@mail.ru',
        name: 'ИП Иванов С.Е.',
        phone: '88000000000',
        orderQty: 5,
    },
    {
        id: 4,
        email: 'info@mail.ru',
        name: 'Смирнов Сергей Иванович',
        phone: '88000000000',
        orderQty: 20,
    },
    {
        id: 5,
        email: 'info@mail.ru',
        name: 'ИП Иванов С.Е.',
        phone: '88000000000',
        orderQty: 200,
    },
];

/**
 * Страница заказов
 */
const CustomersPage = () => {
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

export default CustomersPage;
