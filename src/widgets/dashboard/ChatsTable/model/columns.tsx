import {GridColDef} from '@mui/x-data-grid';
import {Visibility} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {Chat} from '../../../../entities/chats/model/types';

type getChatsTableColumnsParams = {
    handleClickView: (data: Chat) => void;
};

export const getChatsTableColumns = (
    data: getChatsTableColumnsParams
): GridColDef<Chat>[] => {
    return [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
        },
        {
            field: 'interlocutor',
            headerName: 'Пользователь',
            flex: 1,
            valueGetter: (_, row) => row.interlocutor.name,
        },
        {
            field: 'actions',
            headerName: 'Действия',
            headerAlign: 'right',
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
                </>
            ),
        },
    ];
};
