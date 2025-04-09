import {Paper, Typography, Divider} from '@mui/material';

type OrderModalCommentProps = {
    comment?: string;
};

/**
 * Отображение комментария к заказу в модалке в админке
 */
const OrderModalComment = ({comment}: OrderModalCommentProps) => {
    if (!comment) return <></>;

    return (
        <Paper elevation={0} sx={{p: 2, mb: 3, height: '100%'}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Комментарий заказчика
            </Typography>
            <Divider sx={{mb: 2}} />
            <Typography whiteSpace="pre-wrap">{comment}</Typography>
        </Paper>
    );
};

export default OrderModalComment;
