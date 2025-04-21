import {Theme} from '@mui/material/styles';

export const navigationWrapperStyles = ({theme}: {theme: Theme}) => ({
    background: theme.palette.background.gradient,
});

export const tabsStyles = () => ({
    padding: '8px',
    '& .MuiTabs-indicator': {
        display: 'none', // Полностью скрываем индикатор
    },
});

export const tabStyles = ({theme}: {theme: Theme}) => ({
    margin: '0 4px',
    padding: '2px 32px',
    borderRadius: 20,
    transition: 'all 0.3s',
    border: 'solid 1px',
    borderColor: 'transparent',
    color: theme.palette.text.white,
    backgroundColor: 'transparent',
    fontWeight: 400,
    fontSize: theme.typography.subtitle2.fontSize,
    '&:hover': {
        backgroundColor: theme.palette.action.hover, // Цвет ховера из темы
        borderColor: theme.palette.background.paper,
    },
    '&.Mui-selected': {
        color: theme.palette.text.black,
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
            backgroundColor: theme.palette.background.paper, // Сохраняем тот же цвет
        },
    },
});
