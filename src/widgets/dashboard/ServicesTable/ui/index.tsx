import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {ruRU} from '@mui/x-data-grid/locales';
import {
    getServices,
    getServicesPagination,
    getServicesSort,
} from '../../../../entities/service/model/selectors';
import {getServiceTableColumns} from '../model/columns';
import {useAppDispatch, useAppSelector} from '../../../../app/store/hook';
import {useServiceTableHandles} from '../model/handles';
import {fetchServices} from '../../../../entities/service/model/thunk';
import {useEffect} from 'react';

/**
 * Таблица услуг
 */
const ServicesTable = () => {
    const services = useAppSelector(getServices);
    const pagination = useAppSelector(getServicesPagination);
    const sort = useAppSelector(getServicesSort);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchServices());

        return () => fetching.abort();
    }, [pagination.currentPage, pagination.perPage, dispatch, sort]);

    /**
     * Получение данных для таблицы
     */
    const handles = useServiceTableHandles();

    const paginationModel = {
        page: pagination.currentPage,
        pageSize: pagination.perPage,
    };

    const columns = getServiceTableColumns({
        handleClickDelete: handles.handleClickDelete,
    });

    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <DataGrid
                rows={services}
                columns={columns}
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                // paginationMode="server"
                // rowCount={pagination.total}
                // sortModel={sort ? [sort] : undefined}
                // onSortModelChange={handles.handleSortModelChange}
                // paginationModel={paginationModel}
                // onPaginationModelChange={handles.handlePaginationModelChange}
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
