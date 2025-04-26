import {GridColDef} from '@mui/x-data-grid';
import {ErrorOutline, Visibility} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import {Chat} from 'sunset-chat';

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
            valueGetter: (_, row) => row.chatUser.name,
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
                        color={params.row.newMessages > 0 ? 'error' : 'primary'}
                        onClick={() => data.handleClickView(params.row)}
                    >
                        {params.row.newMessages > 0 ? (
                            <ErrorOutline fontSize="small" />
                        ) : (
                            <Visibility fontSize="small" />
                        )}
                    </IconButton>
                </>
            ),
        },
    ];
};
