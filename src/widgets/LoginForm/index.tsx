import React, {useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';
import PasswordField from '../../shared/ui/inputs/PasswordField';
import {useStyles} from './styles';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Логин:', email, password);
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default LoginForm;
