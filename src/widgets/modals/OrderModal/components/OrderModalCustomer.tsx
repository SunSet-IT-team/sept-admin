import {Paper, Typography, Divider, Grid} from '@mui/material';
import {Customer} from '../../../../entities/customers/model/types';

type OrderModalCustomerProps = {
    customer: Customer;
};

/**
 * Данные по заказчику внутри
 */
const OrderModalCustomer = ({customer}: OrderModalCustomerProps) => {
    return (
        <Paper elevation={0} sx={{p: 2}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Данные заказчика
            </Typography>
            <Divider sx={{mb: 2}} />

            <Grid container spacing={1}>
                <Grid size={{xs: 12}}>
                    {customer.addresses[0] && (
                        <Typography>
                            <strong>Адрес:</strong>{' '}
                            {customer.addresses[0].address}
                        </Typography>
                    )}
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Телефон:</strong> {customer.phone}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography>
                        <strong>Имя:</strong> {customer.name}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default OrderModalCustomer;
