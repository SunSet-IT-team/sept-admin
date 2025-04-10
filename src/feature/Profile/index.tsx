import {ExitToApp} from '@mui/icons-material';
import {Stack, Typography, Box, Button} from '@mui/material';
import {useSelector} from 'react-redux';
import {getCurrentUser} from '../../entities/user/model/selectors';
import {User} from '../../entities/user/model/types';
import {useStyles} from './styles';
import {useAppDispatch} from '../../app/store/hook';
import {logout} from '../../entities/user/model/auth';
import {setUser} from '../../entities/user/model/slice';

/**
 * Компонент информации о профиле в шапке
 */
const Profile = () => {
    const user = useSelector(getCurrentUser) as User;
    const styles = useStyles();

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        const res = confirm('Вы действительно хотите выйти?');
        if (!res) return;
        logout();
        dispatch(setUser(null));
    };

    return (
        <Stack>
            <Box sx={styles.userBoxStyles}>
                <Typography variant="subtitle2" component="p">
                    {user.login}
                </Typography>
                <Typography variant="subtitle2" component="p">
                    {user.email}
                </Typography>
            </Box>
            <Button
                sx={styles.exitBtnStyles}
                startIcon={<ExitToApp />}
                onClick={handleLogout}
            >
                Выйти
            </Button>
        </Stack>
    );
};

export default Profile;
