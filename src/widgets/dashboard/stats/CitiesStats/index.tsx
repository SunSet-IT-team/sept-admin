import {Paper, Typography, Grid, Divider} from '@mui/material';
import {useAppSelector} from '../../../../app/store/hook';
import {getStats} from '../../../../entities/stats/model/selectors';

/**
 * Отображение статистики по городам
 */
const CitiesStats = () => {
    const {orderStats} = useAppSelector(getStats);

    return (
        <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="h6" gutterBottom>
                Распределение заказов по городам
            </Typography>

            <Grid container spacing={2}>
                {orderStats.cities.map((el, index) => (
                    <>
                        <Grid size={{xs: 6, md: 3}} key={el.city}>
                            <Typography variant="body1">
                                {el.city}: <strong>{el.value}</strong>
                            </Typography>
                        </Grid>
                        {(index + 1) % 4 === 0 && (
                            <Grid size={{xs: 12}}>
                                <Divider sx={{my: 1}} />
                            </Grid>
                        )}
                    </>
                ))}
            </Grid>
        </Paper>
    );
};

export default CitiesStats;
