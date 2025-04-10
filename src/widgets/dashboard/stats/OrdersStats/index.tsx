import {Paper, Typography, Box} from '@mui/material';
import {Chart, registerables} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Pie} from 'react-chartjs-2';
import {pieOptions, legendMarginPlugin} from './chart-setting';
import {useAppSelector} from '../../../../app/store/hook';
import {getStats} from '../../../../entities/stats/model/selectors';

Chart.register(...registerables, ChartDataLabels);

const OrdersStats = () => {
    const {orderStats} = useAppSelector(getStats);

    // Данные для диаграммы
    const pieData = {
        labels: ['Закрытые заявки', 'Открытые заявки'],
        datasets: [
            {
                data: [
                    orderStats.totalOrdersClosed,
                    orderStats.totalOrdersOpen,
                ],
                backgroundColor: ['#45b3aa', '#777776'],
                borderWidth: 0,
                hoverOffset: 55,
            },
        ],
    };

    return (
        <Paper elevation={3} sx={{p: 3, height: '100%'}}>
            <Typography variant="h6" gutterBottom>
                Общая статистика заявок
            </Typography>

            <Typography variant="body1" component="p">
                Всего заявок: <strong>{orderStats.totalOrders}</strong>
            </Typography>

            <Typography variant="body1" component="p">
                Закрытых заявок: <strong>{orderStats.totalOrdersClosed}</strong>{' '}
                (
                {Math.round(
                    (orderStats.totalOrders
                        ? orderStats.totalOrdersClosed / orderStats.totalOrders
                        : 0) * 100
                )}
                %)
            </Typography>

            <Typography variant="body1" component="p">
                Открытых заявок: <strong>{orderStats.totalOrdersOpen}</strong> (
                {Math.round(
                    (orderStats.totalOrders
                        ? orderStats.totalOrdersOpen / orderStats.totalOrders
                        : 0) * 100
                )}
                %)
            </Typography>

            <Box sx={{height: 300, mt: 2}}>
                <Pie
                    data={pieData}
                    options={pieOptions}
                    plugins={[legendMarginPlugin]}
                />
            </Box>
        </Paper>
    );
};

export default OrdersStats;
