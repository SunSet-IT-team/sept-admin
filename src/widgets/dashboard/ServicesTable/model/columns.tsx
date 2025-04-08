import {GridColDef} from '@mui/x-data-grid';
import {ServiceTableItem} from './types';
import {Delete} from '@mui/icons-material';
import {IconButton} from '@mui/material';

type getServiceTableColumnsParams = {
    handleClickDelete: (data: ServiceTableItem) => void;
};

export const getServiceTableColumns = (
    data: getServiceTableColumnsParams
): GridColDef<ServiceTableItem>[] => {
    return [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'name',
            headerName: 'Услуга',
            flex: 1,
            editable: true,
        },

        {
            field: 'priority',
            headerName: 'Приоритет',
            width: 250,
            editable: true,
        },

        {
            field: 'actions',
            headerName: 'Действия',
            headerAlign: 'right',
            align: 'right',
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton
                            color="error"
                            onClick={() => data.handleClickDelete(params.row)}
                        >
                            <Delete fontSize="small" />
                        </IconButton>
                    </>
                );
            },
        },
    ];
};
