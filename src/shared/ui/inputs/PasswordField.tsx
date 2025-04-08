import React, {useState} from 'react';
import {TextField, IconButton, InputAdornment} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

type PasswordFieldProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};

/**
 * Поле для ввода и просмотра пароля
 */
const PasswordField: React.FC<PasswordFieldProps> = ({
    value,
    onChange,
    label = 'Пароль',
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={toggleShowPassword}
                            edge="end"
                            aria-label="показать пароль"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default PasswordField;
