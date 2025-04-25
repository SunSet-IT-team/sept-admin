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
        attachButton: {
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            },
        },
    };
};
