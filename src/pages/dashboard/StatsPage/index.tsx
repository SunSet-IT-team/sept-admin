import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import OrdersStats from '../../../widgets/dashboard/stats/OrdersStats';
import CitiesStats from '../../../widgets/dashboard/stats/CitiesStats';
import ExecutorsStats from '../../../widgets/dashboard/stats/ExecutorsStats';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Страница со статистикой
 */
const StatsPage = () => {
    // Данные для статистики

    return (
        <Box sx={{p: 3}}>
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 4}}>
                    <OrdersStats />
                </Grid>

                {/* Вторая и третья колонки объединены */}
                <Grid size={{xs: 12, md: 8}}>
                    <Grid container spacing={3}>
                        {/* Первая строка - Статистика мастеров */}
                        <Grid size={{xs: 12}}>
                            <ExecutorsStats />
                        </Grid>

                        {/* Вторая строка - Распределение по городам */}
                        <Grid size={{xs: 12}}>
                            <CitiesStats />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StatsPage;
