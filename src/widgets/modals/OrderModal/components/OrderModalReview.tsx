import {Divider, Paper, Typography} from '@mui/material';
import {Order} from '../../../../entities/orders/model/types';

type OrderModalReviewProps = {
    review: Order['review'];
};

/**
 * Отображение отзыва заказчика внутри модалки
 */
const OrderModalReview = ({review}: OrderModalReviewProps) => {
    if (!review) return <></>;

    return (
        <Paper elevation={0} sx={{p: 2, height: '100%'}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Отзыв заказчика
            </Typography>
            <Divider sx={{mb: 2}} />
            <Typography whiteSpace="pre-wrap">
                {review.text || 'Нет отзыва'}
            </Typography>
        </Paper>
    );
};

export default OrderModalReview;
