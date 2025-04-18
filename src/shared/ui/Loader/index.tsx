import {CircularProgress, keyframes, useTheme} from '@mui/material';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

/**
 * Круговая загрузка
 */
const Loader = () => {
    const theme = useTheme();
    return (
        <CircularProgress
            size={64}
            thickness={4}
            sx={{
                color: theme.palette.primary.main,
                animation: `${pulse} 2s ease-in-out infinite`,
            }}
        />
    );
};

export default Loader;
