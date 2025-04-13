import React, {useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';
import PasswordField from '../../shared/ui/inputs/PasswordField';
import {useStyles} from './styles';
import {userApi} from '../../entities/user/api';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../app/store/hook';
import {auth} from '../../entities/user/model/auth';
import {fetchAdminData} from '../../entities/user/model/thunk';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        const {data} = await userApi.auth({
            email,
            password,
        });

        setIsLoading(false);

        if (!data.success) {
            toast.error('Неправильный логин или пароль');
            return;
        }

        auth(data.data.token);
        dispatch(fetchAdminData());
    };

    const styles = useStyles();

    return (
        <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
            <Typography
                variant="h5"
                align="center"
                component="h1"
                sx={styles.title}
            >
                Войти
            </Typography>

            <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordField
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                loading={isLoading}
                sx={styles.button}
            >
                Войти
            </Button>
        </Box>
    );
};

export default LoginForm;
