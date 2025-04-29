import {Paper, Typography, Divider, Grid} from '@mui/material';
import {Order} from '../../../../entities/orders/model/types';
import {
    formatDateToDMY,
    mapOrderStatus,
} from '../../../../shared/utils/formatter';

type OrderModalDetailsProps = {
    order: Order;
};

/**
 * Детали заказа в модалке
 */
const OrderModalDetails = ({order}: OrderModalDetailsProps) => {
    return (
        <Paper elevation={0} sx={{p: 2, mb: 3}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Детали заказа
            </Typography>
            <Divider sx={{mb: 2}} />

            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Исполнитель:</strong> {order.executor?.name}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Услуга:</strong> {order.service?.name}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Дата открытия:</strong> {order.date}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Статус:</strong> {mapOrderStatus(order.status)}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Форма оплаты:</strong> {order.payment}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Объем:</strong> {order.septicVolume}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Глубина:</strong> {order.septicDepth}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Расстояние:</strong> {order.septicDistance}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Вид сооружения:</strong> {order.object}
                    </Typography>
                </Grid>
                {order.report && (
                    <Grid size={{xs: 12}}>
                        <Typography>
                            <strong>Сумма контракта:</strong>{' '}
                            {order.report.total}₽
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};

export default OrderModalDetails;
