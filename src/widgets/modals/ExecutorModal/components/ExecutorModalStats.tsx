import {Grid, Typography, Box, Button} from '@mui/material';
import {RectSkeleton} from '../../../../shared/ui/skeleton/RectSkeleton';
import {ExecutorStats} from '../../../../entities/executors/model/types';
import DeleteIcon from '@mui/icons-material/Delete';

type ExecutorModalStatsProps = {
    stats: ExecutorStats | null;
    handleClickDelete: () => void;
};

/**
 * Часть отображения модалки - информация о статистике
 */
const ExecutorModalStats = ({
    stats,
    handleClickDelete,
}: ExecutorModalStatsProps) => {
    return (
        <Grid size={{xs: 12, md: 6}} sx={{mt: 2}}>
            <Typography
                variant="subtitle1"
                gutterBottom
                fontWeight="bold"
                sx={{fontSize: '20px', lineHeight: '21px'}}
            >
                Выполнено заявок
            </Typography>
            <Box sx={{mb: 6}}>
                {stats ? (
                    <>
                        <Typography
                            variant="body1"
                            sx={{fontSize: '20px', lineHeight: '21px'}}
                        >
                            <strong> · Месяц: {stats.statsMonth.closed}</strong>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{fontSize: '20px', lineHeight: '21px'}}
                        >
                            <strong>
                                · Весь период: {stats.statsTotal.closed}
                            </strong>
                        </Typography>
                    </>
                ) : (
                    <>
                        <RectSkeleton width={160} height={20} />
                        <RectSkeleton width={160} height={20} />
                    </>
                )}
            </Box>
            <Button
                variant="contained"
                onClick={handleClickDelete}
                fullWidth
                sx={{
                    borderRadius: '20px',
                    fontSize: '20px',
                    lineHeight: '21px',
                    fontWeight: 400,
                }}
            >
                Удалить анкету
            </Button>
        </Grid>
    );
};

export default ExecutorModalStats;
