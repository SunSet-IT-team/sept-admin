import {StylesDictionary} from '../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        listStyles: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '80px',
        },
        infoStyles: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '30px',
        },
        textStyles: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
        },
        iconStyles: {
            width: '42px',
            height: '42px',
        },
        labelStyles: {
            lineHeight: '18px',
        },
        valueStyles: {
            lineHeight: '18px',
        },
    };
};
