import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {ruRU} from '@mui/x-data-grid/locales';
import {useState, useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../../../app/store/hook';
import {useExecutorTableHandles} from '../model/handles';
import {ExecutorModal} from '../../../modals/ExecutorModal';
import {Executor} from '../../../../entities/executors/model/types';
import {
    getExecutors,
    getExecutorsIsLoading,
} from '../../../../entities/executors/model/selectors';
import {getExecutorsTableColumns} from '../model/columns';
import {fetchExecutors} from '../../../../entities/executors/model/thunk';

/**
 * Таблица Исполнителей
 */
const ExecutorsTable = () => {
    const [selectedExecutor, setSelectedExecutor] = useState<Executor | null>(
        null
    );
    const executors = useAppSelector(getExecutors);
    const executorsIsLoading = useAppSelector(getExecutorsIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchExecutors());

        return () => fetching.abort();
    }, []);

    /**
     * Получение данных для таблицы
     */
    const handles = useExecutorTableHandles();

    const columns = getExecutorsTableColumns({
        handleClickDelete: handles.handleClickDelete,
        handleClickView: (data) => {
            setSelectedExecutor(data);
        },
    });

    return (
        <>
            <Box sx={{height: 500, width: '100%', mt: 3}}>
                <DataGrid
                    rows={executors}
                    columns={columns}
                    localeText={
                        ruRU.components.MuiDataGrid.defaultProps.localeText
                    }
                    loading={executorsIsLoading}
                    processRowUpdate={handles.handleProcessRowUpdate}
                    disableColumnSelector
                />
            </Box>

            <ExecutorModal
                open={!!selectedExecutor}
                onClose={() => setSelectedExecutor(null)}
                executor={selectedExecutor}
            />
        </>
    );
};

export default ExecutorsTable;
