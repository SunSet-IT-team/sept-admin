import {GridColDef} from '@mui/x-data-grid';
import {Delete, Visibility} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {Executor} from '../../../../entities/executors/model/types';

type getExecutorTableColumnsParams = {
    handleClickDelete: (data: Executor) => void;
    handleClickView: (data: Executor) => void;
};

export const getExecutorsTableColumns = (
    data: getExecutorTableColumnsParams
): GridColDef<Executor>[] => {
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
            headerName: 'Сдано заявок',
            flex: 1,
        },
        {
            field: 'priority',
            headerName: 'Приоритет',
            width: 150,
            editable: true,
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
