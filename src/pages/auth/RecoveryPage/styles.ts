import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        link: {
            mt: 4,
            opacity: 0.4,
            '& a': {
                color: theme.palette.text.black,
                fontWeight: 500,
                textDecoration: 'none',
            },
        },
    };
};
