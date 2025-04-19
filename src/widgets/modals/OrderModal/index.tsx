import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OrderModalReview from './components/OrderModalReview';
import {Order} from '../../../entities/orders/model/types';
import OrderModalComment from './components/OrderModalComment';
import OrderModalDetails from './components/OrderModalDetails';
import OrderModalCustomer from './components/OrderModalCustomer';

type OrderModalProps = {
    open: boolean;
    onClose: () => void;
    order: Order | null;
};

/**
 * Модалка отображения заказа
 */
export const OrderModal: React.FC<OrderModalProps> = ({
    open,
    onClose,
    order,
}) => {
    if (!order) return <></>;

    console.log('OrderModal');
    console.log(order);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 2,
                        minHeight: '60vh',
                    },
                },
            }}
        >
            <DialogTitle>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6">
                        Детали заказа #{order.id}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </DialogTitle>

            <DialogContent dividers>
                <Grid container spacing={3}>
                    <Grid size={{xs: 12, md: 6}}>
                        <OrderModalDetails order={order} />
                    </Grid>
                    {order.customer && (
                        <Grid size={{xs: 12, md: 6}}>
                            <OrderModalCustomer customer={order.customer} />
                        </Grid>
                    )}
                </Grid>
                <OrderModalComment comment={order.detailes?.comment} />
                <OrderModalReview review={order.review} />
            </DialogContent>

            <DialogActions sx={{p: 2}}>
                <Button onClick={onClose} variant="outlined">
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};
