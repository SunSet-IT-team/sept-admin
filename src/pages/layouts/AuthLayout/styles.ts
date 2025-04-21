import {StylesDictionary} from '../../../shared/types/share';

export const useStyles = (): StylesDictionary => {
    return {
        container: {
            padding: '20px',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            width: '100%',
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoContainer: {
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 'auto',
            mb: 3,
            gap: 2,
        },
        logo: {
            aspectRatio: '5/6', // Замените на реальное соотношение вашего лого
            width: '100%',
            maxWidth: '150px',

            objectFit: 'contain',
        },
        logoText: {
            width: '100%',
            height: '100%',
            maxWidth: '300px',

            objectFit: 'contain',
        },
    };
};
