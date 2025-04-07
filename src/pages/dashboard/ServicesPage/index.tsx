import {Box, IconButton} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Visibility, Delete} from '@mui/icons-material';

// Тип данных для строк таблицы
interface Service {
    id: number;
    name: string;
}

const columns: GridColDef<Service>[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 150,
    },
    {
        field: 'name',
        headerName: 'Услуга',
        flex: 1,
        editable: true, // Разрешаем редактирование
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
const rows: Service[] = [
    {id: 1, name: 'Диагностика'},
    {id: 2, name: 'Замена экрана'},
    {id: 3, name: 'Замена батареи'},
    {id: 4, name: 'Чистка от пыли'},
    {id: 5, name: 'Установка ПО'},
];

/**
 * Страница услуг
 */
const ServicesPage = () => {
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
                disableMultipleRowSelection
                checkboxSelection={false} // Отключаем выбор строк
            />
        </Box>
    );
};

export default ServicesPage;
