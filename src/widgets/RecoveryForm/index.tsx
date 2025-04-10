import {useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';
import PasswordField from '../../shared/ui/inputs/PasswordField';
import {useStyles} from './styles';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {userApi} from '../../entities/user/api';
import {useAppDispatch} from '../../app/store/hook';

type RecoveryFormData = {
    email: string;
    code: string;
    password: string;
    confirmPassword: string;
};

/**
 * Форма восстановления пароля
 */
const RecoveryForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm<RecoveryFormData>();

    const onSubmit = async (formData: RecoveryFormData) => {
        try {
            if (isLoading) return;

            setIsLoading(true);

            const {data} = await userApi.recovery({
                code: formData.code,
                newPassword: formData.password,
                confirmPassword: formData.confirmPassword,
            });

            console.log(data);

            setIsLoading(false);

            if (!data.success) {
                toast.error('Неправильный логин или пароль');
                return;
            }
        } catch (e: any) {
            console.log(e);

            setIsLoading(false);
            toast.error('Ошибка сервера');
        }
    };

    const styles = useStyles();

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={styles.form}
        >
            <Typography
                variant="h5"
                align="center"
                component="h1"
                sx={styles.title}
            >
                Восстановление пароля
            </Typography>

            <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email', {
                    required: 'Обязательное поле',
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Некорректный email',
                    },
                })}
            />

            <TextField
                label="Кодовое слово"
                variant="outlined"
                fullWidth
                error={!!errors.code}
                helperText={errors.code?.message}
                {...register('code', {required: 'Введите кодовое слово'})}
            />

            <PasswordField
                label="Новый пароль"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register('password', {
                    required: 'Введите пароль',
                    minLength: {
                        value: 8,
                        message: 'Минимум 8 символов',
                    },
                })}
            />

            <PasswordField
                label="Повторить новый пароль"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                    validate: (value) =>
                        value === watch('password') || 'Пароли не совпадают',
                })}
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

export default RecoveryForm;
