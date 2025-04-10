import {useTheme} from '@mui/material/styles';
import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    const theme = useTheme();

    return {
        form: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: 'solid 2px',
            borderColor: theme.palette.primary.light,
            borderRadius: 4,
            overflow: 'hidden',
        },

        chatHeader: {
            backgroundColor: theme.palette.primary.light,
            position: 'sticky',
            left: 0,
            top: 0,
            right: 0,
        },

        chatHeaderUser: {
            justifyContent: 'center',
            alignItems: 'center',
            py: '15px',
        },

        chatHeaderUserName: {
            textAlign: 'center',
            mt: '10px',
        },

        chatHeaderUserImage: {
            borderRadius: '50%',
            width: 89,
            height: 89,
            backgroundColor: '#4D4D4D',
        },

        messageWrapper: {
            p: '20px',
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflow: 'hidden',
        },

        messageList: {
            gap: '12px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflow: 'auto',
        },

        additionalInfo: {
            textAlign: 'center',
            mt: '10px',
        },

        messageForm: {
            gap: '10px',
            px: '20px',
            pb: '20px',
        },

        messageArea: {
            '& .MuiInputBase-input': {
                padding: '10px',
                '::placeholder': {
                    fontStyle: 'italic',
                    textAlign: 'center',
                    fontSize: '14px',
                },
            },
        },

        message: {
            p: '10px',
            maxWidth: '90%',
            borderRadius: '5px',
            mr: 'auto',
            ml: '',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.text.black,
        },

        myMessage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            p: '10px',
            maxWidth: '90%',
            borderRadius: '5px',
            ml: 'auto',
            mr: '',

            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.white,
        },

        messageContent: {
            fontSize: '14px',
            wordBreak: 'break-all',
        },
        messageTime: {
            fontSize: '10px',
        },
        messageAdditional: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            gap: '5px',
            alignItems: 'center',
            mt: '5px',
        },
    };
};
