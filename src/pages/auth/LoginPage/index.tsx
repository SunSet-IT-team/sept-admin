import {Typography} from '@mui/material';
import LoginForm from '../../../widgets/LoginForm';
import {useStyles} from './styles';
import {SlugPages} from '../../../app/routes/pages';
import {Link} from 'react-router-dom';

/**
 * Страница логина
 */
const LoginPage = () => {
    const styles = useStyles();
    return (
        <>
            <LoginForm />
            <Typography sx={styles.link}>
                <Link to={`/${SlugPages.RECOVERY}`}>Забыли пароль?</Link>
            </Typography>
        </>
    );
};

export default LoginPage;
