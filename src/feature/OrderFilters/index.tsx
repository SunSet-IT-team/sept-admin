import {useEffect, useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
} from '@mui/material';
import {Clear, FilterAlt} from '@mui/icons-material';
import {useStyles} from './styles';
import {getOrdersFilters} from '../../entities/orders/model/selectors';
import {useAppDispatch, useAppSelector} from '../../app/store/hook';
import {
    resetFilters,
    setOrdersFilters,
} from '../../entities/orders/model/slice';
import {getExecutors} from '../../entities/executors/model/selectors';
import {getCustomers} from '../../entities/customers/model/selectors';
import {OrderStatus} from '../../entities/orders/model/types';
import {mapOrderStatus} from '../../shared/utils/formatter';
import {fetchExecutors} from '../../entities/executors/model/thunk';
import {fetchCustomers} from '../../entities/customers/model/thunk';

const statuses = Object.values(OrderStatus);
/**
 * Фильтры для страницы заказов
 */
export const OrdersFilter = () => {
    const [customerId, setCustomerId] = useState<string | number>('');
    const [executorId, setExecutorId] = useState<string | number>('');
    const [status, setStatus] = useState<string | number>('');

    const dispatch = useAppDispatch();

    // Предвыбранные фильтры
    const filters = useAppSelector(getOrdersFilters);

    // Значения фильтра для исполнителей
    const executors = useAppSelector(getExecutors);

    // Значения фильтра для заказчиков
    const customers = useAppSelector(getCustomers);

    useEffect(() => {
        const initCustomerId =
            filters.find((f) => f.name == 'customerId')?.value || '';
        const initCxecutorId =
            filters.find((f) => f.name == 'executorId')?.value || '';
        const initStatus = filters.find((f) => f.name == 'status')?.value || '';

        setCustomerId(initCustomerId);
        setExecutorId(initCxecutorId);
        setStatus(initStatus);

        dispatch(fetchExecutors());
        dispatch(fetchCustomers());
    }, []);

    const handleApply = () => {
        dispatch(
            setOrdersFilters([
                {
                    name: 'customerId',
                    value: customerId,
                },
                {
                    name: 'executorId',
                    value: executorId,
                },
                {
                    name: 'status',
                    value: status,
                },
            ])
        );
    };

    const handleReset = () => {
        setCustomerId('');
        setExecutorId('');
        setStatus('');
        dispatch(resetFilters());
    };

    const styles = useStyles();

    return (
        <Box component="form" sx={styles.form}>
            <Stack sx={styles.labels}>
                <FormControl size="small" sx={styles.formControl}>
                    <InputLabel>Заказчик</InputLabel>
                    <Select
                        value={String(customerId)}
                        label="Заказчик"
                        onChange={(e: SelectChangeEvent) =>
                            setCustomerId(e.target.value)
                        }
                    >
                        <MenuItem value="">Все заказчики</MenuItem>
                        {customers.map((customer) => (
                            <MenuItem key={customer.id} value={customer.id}>
                                {customer.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={styles.formControl}>
                    <InputLabel>Исполнитель</InputLabel>
                    <Select
                        value={String(executorId)}
                        label="Исполнитель"
                        onChange={(e: SelectChangeEvent) =>
                            setExecutorId(e.target.value)
                        }
                    >
                        <MenuItem value="">Все исполнители</MenuItem>
                        {executors.map((executor) => (
                            <MenuItem key={executor.id} value={executor.id}>
                                {executor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={styles.formControl}>
                    <InputLabel>Статус</InputLabel>
                    <Select
                        value={String(status)}
                        label="Статус"
                        onChange={(e: SelectChangeEvent) =>
                            setStatus(e.target.value)
                        }
                    >
                        <MenuItem value="">Все статусы</MenuItem>
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {mapOrderStatus(status)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>

            <Stack sx={styles.buttons}>
                <Button
                    variant="outlined"
                    startIcon={<Clear />}
                    onClick={handleReset}
                >
                    Сбросить
                </Button>
                <Button
                    variant="contained"
                    startIcon={<FilterAlt />}
                    onClick={handleApply}
                >
                    Применить
                </Button>
            </Stack>
        </Box>
    );
};
