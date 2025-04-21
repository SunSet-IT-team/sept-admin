import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        form: {
            mb: 2,
            borderRadius: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

        labels: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 2,
        },
        buttons: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 2,
        },

        button: {
            width: '150px',
        },
        formControl: {
            minWidth: 200,
            borderRadius: '8px',

            '& .MuiInputBase-root': {
                borderRadius: '8px',
            },
        },
    };
};
