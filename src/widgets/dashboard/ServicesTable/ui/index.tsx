import {Box} from '@mui/material';
import {DataGrid, GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import {
    getServices,
    getServicesPagination,
    getServicesSort,
} from '../../../../entities/service/model/selectors';
import {prepareServicesToTable} from '../model/rows';
import {getServiceTableColumns} from '../model/columns';
import {useCallback, useState} from 'react';
import {ServiceTableItem} from '../model/types';
import {fetchServices} from '../../../../entities/service/model/thunk';
import {useAppDispatch, useAppSelector} from '../../../../app/store/hook';
import {Sort} from '../../../../shared/types/share';

/**
 * Таблица услуг
 */
const ServicesTable = () => {
    const dispatch = useAppDispatch();
    const services = useAppSelector(getServices);
    const pagination = useAppSelector(getServicesPagination);
    const sort = useAppSelector(getServicesSort);

    const paginationModel = {
        page: pagination.currentPage,
        pageSize: pagination.perPage,
    };

    const handleClickDelete = useCallback((data: ServiceTableItem) => {
        console.log(data);
    }, []);

    const handlePaginationModelChange = (model: GridPaginationModel) => {
        dispatch(
            fetchServices({
                page: model.page,
                perPage: model.pageSize,
            })
        );
    };

    const handleSortModelChange = (model: GridSortModel) => {
        const sort: Sort | null = model[0]
            ? {...model[0], sort: model[0].sort ?? 'asc'}
            : null;

        dispatch(
            fetchServices({
                sort: sort,
            })
        );
    };

    const rows = prepareServicesToTable(services);
    const columns = getServiceTableColumns({
        handleClickDelete,
    });

    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <DataGrid
                rows={rows}
                columns={columns}
                paginationMode="server"
                rowCount={pagination.total}
                sortModel={sort ? [sort] : undefined}
                onSortModelChange={handleSortModelChange}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationModelChange}
                pageSizeOptions={[1, 5, 10, 25]}
                loading={pagination.isLoading}
                disableColumnFilter
                disableColumnSelector
            />
        </Box>
    );
};

export default ServicesTable;
