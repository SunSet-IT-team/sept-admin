import {Stack, Box, Typography} from '@mui/material';
import {useStyles} from './styles';
import {InfoIcon} from '../../shared/ui/icons/InfoIcon';
import {useAppDispatch, useAppSelector} from '../../app/store/hook';
import {getStats} from '../../entities/stats/model/selectors';
import {useEffect} from 'react';
import {fetchStats} from '../../entities/stats/model/thunk';

/**
 * Шаблон вывода информации о статистике
 */
const InfoList = () => {
    const styles = useStyles();
    const stats = useAppSelector(getStats);
    const dispatch = useAppDispatch();

    // Формируем массив данных
    const data = [
        {
            label: 'Закрытых заявок',
            value: `${stats.orderStats.totalOrdersClosed} (${
                stats.orderStats.totalOrders > 0
                    ? (
                          (stats.orderStats.totalOrdersClosed /
                              stats.orderStats.totalOrders) *
                          100
                      ).toFixed(2)
                    : 0
            }%)`,
        },
        {
            label: 'Открытых заявок',
            value: `${stats.orderStats.totalOrdersOpen} (${
                stats.orderStats.totalOrders > 0
                    ? (
                          (stats.orderStats.totalOrdersOpen /
                              stats.orderStats.totalOrders) *
                          100
                      ).toFixed(2)
                    : 0
            }%)`,
        },
        {
            label: 'Всего мастеров',
            value: `${stats.executerStats.totalExecuters}`,
        },
    ];

    useEffect(() => {
        const fetching = dispatch(fetchStats());

        return () => {
            fetching.abort();
        };
    }, []);

    return (
        <Stack sx={styles.listStyles}>
            {data.map((stat, index) => (
                <Box key={index} sx={styles.infoStyles}>
                    <InfoIcon sx={styles.iconStyles} />
                    <Box sx={styles.textStyles}>
                        <Typography
                            variant="subtitle2"
                            sx={styles.labelStyles}
                            component="p"
                        >
                            {stat.label}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={styles.valueStyles}
                            component="p"
                        >
                            {stat.value}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Stack>
    );
};

export default InfoList;
