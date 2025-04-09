import {GridColDef} from '@mui/x-data-grid';
import {Delete} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {Customer} from '../../../../entities/customers/model/types';

type getCustomerTableColumnsParams = {
    handleClickDelete: (data: Customer) => void;
};

export const getCustomersTableColumns = (
    data: getCustomerTableColumnsParams
): GridColDef<Customer>[] => {
    return [
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
            headerName: 'Оформлено заявок',
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
