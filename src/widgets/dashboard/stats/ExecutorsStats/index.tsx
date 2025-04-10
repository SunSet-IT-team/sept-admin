import {
    Paper,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import {useAppSelector} from '../../../../app/store/hook';
import {getStats} from '../../../../entities/stats/model/selectors';

/**
 * Отображение статистики по исполнителям
 */
const ExecutorsStats = () => {
    const {executerStats} = useAppSelector(getStats);

    return (
        <Paper elevation={3} sx={{p: 3}}>
            <Grid container spacing={4}>
                <Grid size={{xs: 12, md: 6}}>
                    <Typography variant="h6">
                        Общая статистика мастеров
                    </Typography>
                    <Typography variant="body1">
                        Всего мастеров:{' '}
                        <strong>{executerStats.totalExecuters}</strong>
                    </Typography>
                    <Typography variant="body1">
                        Новых в этом месяце:{' '}
                        <strong>{executerStats.newExecuters}</strong>
                    </Typography>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <Typography variant="h6">Топ-3 по закрытию:</Typography>
                    <List dense>
                        {executerStats.topExecuters.map((master, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={`${master.name} (${master.orderQty})`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ExecutorsStats;
