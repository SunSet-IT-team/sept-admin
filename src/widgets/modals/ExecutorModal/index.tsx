import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
    Grid,
    IconButton,
    Typography,
    Avatar,
    Chip,
    Paper,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import {Executor} from '../../../entities/executors/model/types';
import ExecutorModalStats from './components/ExecutorModalStats';
import ExecutorModalDocs from './components/ExecutorModalDocs';

type ExecutorModalProps = {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
    executor: Executor;
};

/**
 * Отображение модалки для заказчика
 */
export const ExecutorModal: React.FC<ExecutorModalProps> = ({
    open,
    onClose,
    onDelete,
    executor,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    minHeight: '60vh',
                },
            }}
        >
            <DialogTitle>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h5" fontWeight="bold">
                        {executor.name}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </DialogTitle>

            <DialogContent dividers>
                <Box sx={{mb: 3}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                        <StarIcon color="warning" />
                        <Typography variant="body1" sx={{ml: 1, mr: 2}}>
                            {executor.rating.value.toFixed(1)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ({executor.rating.count} оценок)
                        </Typography>
                    </Box>
                    <Typography variant="body1">{executor.about}</Typography>
                </Box>

                <Divider sx={{my: 2}} />

                <Grid container spacing={4}>
                    <ExecutorModalDocs docs={executor.docs} />

                    <ExecutorModalStats />
                </Grid>
            </DialogContent>

            <DialogActions sx={{p: 2, justifyContent: 'space-between'}}>
                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={onDelete}
                >
                    Удалить
                </Button>
                <Button variant="contained" onClick={onClose}>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};
