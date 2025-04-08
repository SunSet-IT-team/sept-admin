import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {
    getServices,
    getServicesPagination,
    getServicesSort,
} from '../../../../entities/service/model/selectors';
import {prepareServicesToTable} from '../model/rows';
import {getServiceTableColumns} from '../model/columns';
import {useAppSelector} from '../../../../app/store/hook';
import {useServiceTableHandles} from '../model/handles';

/**
 * Таблица услуг
 */
const ServicesTable = () => {
    const services = useAppSelector(getServices);
    const pagination = useAppSelector(getServicesPagination);
    const sort = useAppSelector(getServicesSort);

    /**
     * Получение данных для таблицы
     */
    const handles = useServiceTableHandles();

    const paginationModel = {
        page: pagination.currentPage,
        pageSize: pagination.perPage,
    };

    const rows = prepareServicesToTable(services);
    const columns = getServiceTableColumns({
        handleClickDelete: handles.handleClickDelete,
    });

    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <DataGrid
                rows={rows}
                columns={columns}
                paginationMode="server"
                rowCount={pagination.total}
                sortModel={sort ? [sort] : undefined}
                onSortModelChange={handles.handleSortModelChange}
                paginationModel={paginationModel}
                onPaginationModelChange={handles.handlePaginationModelChange}
                pageSizeOptions={[1, 5, 10, 25]}
                loading={pagination.isLoading}
                processRowUpdate={handles.handleProcessRowUpdate}
                disableColumnFilter
                disableColumnSelector
            />
        </Box>
    );
};

export default ServicesTable;
