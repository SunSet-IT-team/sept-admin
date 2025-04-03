import {SxProps, Theme, useTheme} from '@mui/material/styles';

type StylesDictionary = Record<string, SxProps<Theme>>;

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        exitBtnStyles: {
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: theme.typography.subtitle1.fontSize,
            fontWeight: theme.typography.subtitle1.fontWeight,
            padding: '0px',
            justifyContent: 'flex-start',
            gap: '13px',
            color: theme.palette.text.black,

            '& .MuiButton-icon': {
                marginRight: '0px',
            },

            '& .MuiButton-icon svg': {
                width: '28px',
                height: '28px',
            },
        },

        userBoxStyles: {
            marginBottom: '15px',
        },
    };
};
