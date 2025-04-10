import React from 'react';
import {Box, CircularProgress, Typography, useTheme} from '@mui/material';
import {keyframes} from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

/**
 * Страница в момент загрузки
 */
const LoadPage: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default,
                animation: `${fadeIn} 0.5s ease-in-out`,
                gap: 3,
                p: 3,
            }}
        >
            {/* Анимированный спиннер с пульсацией */}
            <CircularProgress
                size={64}
                thickness={4}
                sx={{
                    color: theme.palette.primary.main,
                    animation: `${pulse} 2s ease-in-out infinite`,
                }}
            />

            {/* Текст с анимацией */}
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                    animation: `${pulse} 2s ease-in-out infinite`,
                    animationDelay: '0.3s',
                }}
            >
                Загрузка...
            </Typography>
        </Box>
    );
};

export default LoadPage;
