import {Grid, Typography, Box} from '@mui/material';

/**
 * Часть отображения модалки - информация о статистике
 */
const ExecutorModalStats = () => {
    return (
        <Grid size={{xs: 12, md: 6}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Выполнено заявок
            </Typography>
            <Box sx={{mb: 2}}>
                <Typography variant="body1">
                    Месяц: <strong>20</strong>
                </Typography>
            </Box>
            <Box sx={{mb: 3}}>
                <Typography variant="body1">
                    Весь период: <strong>10</strong>
                </Typography>
            </Box>
        </Grid>
    );
};

export default ExecutorModalStats;
