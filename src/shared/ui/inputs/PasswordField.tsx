import {useState, forwardRef} from 'react';
import {
    TextField,
    IconButton,
    InputAdornment,
    TextFieldProps,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

type PasswordFieldProps = TextFieldProps;

/**
 * Поле для ввода и просмотра пароля
 */
const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
    ({type, ...props}, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        const toggleVisibility = () => setShowPassword((prev) => !prev);

        return (
            <TextField
                {...props}
                type={showPassword ? 'text' : 'password'}
                inputRef={ref}
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={toggleVisibility} edge="end">
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                    ...props.InputProps,
                }}
            />
        );
    }
);

export default PasswordField;
