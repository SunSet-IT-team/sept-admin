import {Paper, Typography, Divider, Grid} from '@mui/material';
import {Order} from '../../../../entities/orders/model/types';
import {formatDateToDMY} from '../../../../shared/utils/formatter';

type OrderModalDetailsProps = {
    order: Order;
};

/**
 * Детали заказа в модалке
 */
const OrderModalDetails = ({order}: OrderModalDetailsProps) => {
    if (!order.detailes) return <></>;

    return (
        <Paper elevation={0} sx={{p: 2, mb: 3}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Детали заказа
            </Typography>
            <Divider sx={{mb: 2}} />

            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Исполнитель:</strong> {order.executor.name}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Дата открытия:</strong>{' '}
                        {formatDateToDMY(order.detailes.openDate)}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Статус:</strong> {order.status}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Форма оплаты:</strong>{' '}
                        {order.detailes.paymentMethod}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Объем:</strong> {order.detailes.volume}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Вид сооружения:</strong>{' '}
                        {order.detailes.structureType}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default OrderModalDetails;
