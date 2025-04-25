import {Box, Button, TextField, IconButton} from '@mui/material';
import {useState} from 'react';
import {useStyles} from './styles';
import {useAppDispatch} from '../../../app/store/hook';
import {addServiceAndRefresh} from '../../../entities/service/model/thunk';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {toast} from 'react-toastify';

const AddServiceForm = () => {
    const [serviceName, setServiceName] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const dispatch = useAppDispatch();

    const styles = useStyles();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!serviceName.trim() || !selectedFile) {
            toast.error('Заполните все поля');
            return;
        }

        // Передаем файл вместе с данными, если он есть
        dispatch(
            addServiceAndRefresh({
                name: serviceName,
                servicePreview: selectedFile,
            })
        );
        setSelectedFile(null);
        setServiceName('');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
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

            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <IconButton
                    color="primary"
                    component="label"
                    sx={styles.attachButton}
                >
                    <AttachFileIcon />
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </IconButton>

                {selectedFile && <span>{selectedFile.name}</span>}

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={styles.submit}
                >
                    Добавить
                </Button>
            </Box>
        </Box>
    );
};

export default AddServiceForm;
