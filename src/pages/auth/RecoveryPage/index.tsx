import {Link} from 'react-router-dom';
import RecoveryForm from '../../../widgets/RecoveryForm';
import {SlugPages} from '../../../app/routes/pages';
import {Typography} from '@mui/material';
import {useStyles} from './styles';

/**
 * Страница восстановления пароля
 */
const RecoveryPage = () => {
    const styles = useStyles();

    return (
        <>
            <RecoveryForm />
            <Typography sx={styles.link}>
                <Link to={`/${SlugPages.LOGIN}`}>
                    Уже вспомнили пароль? Назад к входу
                </Link>
            </Typography>
        </>
    );
};

export default RecoveryPage;
