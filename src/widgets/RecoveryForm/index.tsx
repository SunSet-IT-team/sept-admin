import React, {useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';
import PasswordField from '../../shared/ui/inputs/PasswordField';
import {useStyles} from './styles';
import {useForm} from 'react-hook-form';

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
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm<RecoveryFormData>();

    const onSubmit = (data: RecoveryFormData) => {
        console.log('Данные:', data);
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
                        value: 6,
                        message: 'Минимум 6 символов',
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
                sx={styles.button}
            >
                Войти
            </Button>
        </Box>
    );
};

export default RecoveryForm;
