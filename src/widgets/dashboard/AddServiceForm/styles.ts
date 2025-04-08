import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        form: {
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mt: 2,
        },
        input: {
            backgroundColor: theme.palette.background.paper,
        },
        submit: {
            height: '40px',
            whiteSpace: 'nowrap',
        },
    };
};
