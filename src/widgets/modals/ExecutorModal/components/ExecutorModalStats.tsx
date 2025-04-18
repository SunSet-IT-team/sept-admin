import {Grid, Typography, Box} from '@mui/material';
import {RectSkeleton} from '../../../../shared/ui/skeleton/RectSkeleton';
import {ExecutorStats} from '../../../../entities/executors/model/types';

type ExecutorModalStatsProps = {
    stats: ExecutorStats | null;
};

/**
 * Часть отображения модалки - информация о статистике
 */
const ExecutorModalStats = ({stats}: ExecutorModalStatsProps) => {
    return (
        <Grid size={{xs: 12, md: 6}}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Выполнено заявок
            </Typography>
            <Box sx={{mb: 2}}>
                {stats ? (
                    <Typography variant="body1">
                        Месяц: <strong>{stats.statsMonth.closed}</strong>
                    </Typography>
                ) : (
                    <RectSkeleton width={160} height={20} />
                )}
            </Box>
            <Box sx={{mb: 3}}>
                {stats ? (
                    <Typography variant="body1">
                        Весь период: <strong>{stats.statsTotal.closed}</strong>
                    </Typography>
                ) : (
                    <RectSkeleton width={160} height={20} />
                )}
            </Box>
        </Grid>
    );
};

export default ExecutorModalStats;
