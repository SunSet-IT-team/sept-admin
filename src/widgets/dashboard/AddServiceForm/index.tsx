import {Box, Button, TextField} from '@mui/material';
import {useState} from 'react';
import {useStyles} from './styles';
import {useAppDispatch} from '../../../app/store/hook';
import {addServiceAndRefresh} from '../../../entities/service/model/thunk';

const AddServiceForm = () => {
    const [serviceName, setServiceName] = useState('');
    const dispatch = useAppDispatch();

    const styles = useStyles();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (serviceName.trim()) {
            setServiceName('');
            dispatch(addServiceAndRefresh({name: serviceName}));
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
            <TextField
                label="Название услуги"
                variant="outlined"
                size="small"
                fullWidth
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                sx={styles.label}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={styles.submit}
            >
                Добавить
            </Button>
        </Box>
    );
};

export default AddServiceForm;
