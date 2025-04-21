import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {ruRU} from '@mui/x-data-grid/locales';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../../../app/store/hook';
import {useCustomerTableHandles} from '../model/handles';
import {getCustomersTableColumns} from '../model/columns';
import {fetchCustomers} from '../../../../entities/customers/model/thunk';
import {
    getCustomers,
    getCustomersIsLoading,
} from '../../../../entities/customers/model/selectors';

/**
 * Таблица Заказчиков
 */
const CustomersTable = () => {
    const customers = useAppSelector(getCustomers);
    const customersIsLoading = useAppSelector(getCustomersIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchCustomers());

        return () => fetching.abort();
    }, []);

    /**
     * Получение данных для таблицы
     */
    const handles = useCustomerTableHandles();

    const columns = getCustomersTableColumns({
        handleClickDelete: handles.handleClickDelete,
    });

    return (
        <>
            <Box sx={{height: 500, width: '100%', mt: 3}}>
                <DataGrid
                    rows={customers}
                    columns={columns}
                    localeText={
                        ruRU.components.MuiDataGrid.defaultProps.localeText
                    }
                    loading={customersIsLoading}
                    processRowUpdate={handles.handleProcessRowUpdate}
                    disableColumnSelector
                />
            </Box>
        </>
    );
};

export default CustomersTable;
