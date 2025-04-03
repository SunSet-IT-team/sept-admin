import {Stack, Box, Typography} from '@mui/material';
import {useStyles} from './styles';
import {InfoIcon} from '../../shared/ui/icons/InfoIcon';

const stats = [
    {label: 'Закрытых заявок', value: '350 (75%)'},
    {label: 'Открытых заявок', value: '36 (25%)'},
    {label: 'Всего мастеров', value: '570'},
];

/**
 * Шаблон вывода информации о статистике
 */
const InfoList = () => {
    const styles = useStyles();

    return (
        <Stack sx={styles.listStyles}>
            {stats.map((stat, index) => (
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
