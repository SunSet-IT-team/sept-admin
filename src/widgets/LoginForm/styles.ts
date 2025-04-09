import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        form: {
            width: '100%',
            maxWidth: 420,
            margin: '0 auto',
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            bgcolor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: 3,
        },
        title: {color: theme.palette.text.primary},
        button: {mt: 1},
    };
};
