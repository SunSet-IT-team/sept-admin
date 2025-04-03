import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Stack,
    Paper,
    Tab,
    Tabs,
    Container,
} from '@mui/material';
import {ExitToApp} from '@mui/icons-material'; // Иконка выхода
import {useState} from 'react';
import Navigation from '../Navigation';

/**
 * Шапка сайта
 */
export const Header = () => {
    // Пример данных (можно заменить на данные из Redux/API)
    const stats = [
        {label: 'Заказы', value: '24%'},
        {label: 'Исполнители', value: '15%'},
        {label: 'Прибыль', value: '37%'},
    ];

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Container>
                <Toolbar sx={{justifyContent: 'space-between', py: 2}}>
                    {/* Левая часть: Имя + кнопка выхода */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="h6" fontWeight="bold">
                            Иван Иванов
                        </Typography>
                        <Button
                            variant="outlined"
                            color="inherit"
                            startIcon={<ExitToApp />}
                            onClick={() => console.log('Выход')}
                        >
                            Выйти
                        </Button>
                    </Stack>

                    {/* Правая часть: Статистика */}
                    <Stack direction="row" spacing={4}>
                        {stats.map((stat, index) => (
                            <Box key={index} textAlign="center">
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {stat.label}
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {stat.value}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
