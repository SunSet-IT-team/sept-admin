import {ChartOptions, Plugin} from 'chart.js';

/**
 * плагин для отступа
 */
export const legendMarginPlugin: Plugin<'pie'> = {
    id: 'legendMargin',
    beforeInit(chart) {
        if (!chart.legend) return;
        // Получаем оригинальную функцию рендеринга легенды
        const originalFit = chart.legend.fit;

        // Переопределяем функцию fit
        chart.legend.fit = function () {
            // Вызываем оригинальную функцию
            originalFit.bind(chart.legend)();
            // Добавляем отступ снизу легенды
            this.height += 20; // 20px - нужный вам отступ
        };
    },
};

/**
 * Настройки для диаграммы
 */
export const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align: 'start',
            labels: {
                padding: 15,
                font: {
                    size: 14,
                },
                usePointStyle: true,
            },
        },
        tooltip: {
            callbacks: {
                label: (context) => {
                    const label = context.label || '';
                    const value = Number(context.raw) || 0;
                    const total = context.dataset.data.reduce(
                        (a, b) => a + b,
                        0
                    );
                    const percentage = Math.round((value / total) * 100);
                    return `${label}: ${value} (${percentage}%)`;
                },
            },
        },
        datalabels: {
            color: '#fff',
            formatter: (value, context) => {
                const data = context.chart.data.datasets[0].data;
                const total = (data as number[]).reduce(
                    (acc, val) => acc + val,
                    0
                );
                const percentage = Math.round((value / total) * 100);
                return `${percentage}%`;
            },
            font: {
                weight: 'bold',
                size: 16,
            },
        },
    },
    layout: {
        padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 40,
        },
    },
    animation: {
        animateScale: true,
        animateRotate: true,
    },
    radius: '90%',
};
