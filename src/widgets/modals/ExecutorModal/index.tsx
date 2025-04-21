import React, {useEffect, useState} from 'react';
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
import {Executor, ExecutorStats} from '../../../entities/executors/model/types';
import ExecutorModalStats from './components/ExecutorModalStats';
import ExecutorModalDocs from './components/ExecutorModalDocs';
import {useAppDispatch} from '../../../app/store/hook';
import {deleteExecutorAndRefresh} from '../../../entities/executors/model/thunk';
import {ExecutorApi} from '../../../entities/executors/api';

type ExecutorModalProps = {
    open: boolean;
    onClose: () => void;
    executor: Executor | null;
};

/**
 * Отображение модалки для заказчика
 */
export const ExecutorModal: React.FC<ExecutorModalProps> = ({
    open,
    onClose,
    executor,
}) => {
    const [stats, setStats] = useState<ExecutorStats | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const f = async () => {
            try {
                const {data} = await ExecutorApi.getStats(executor?.id || 0);

                if (data.success) setStats(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        f();
    }, [executor?.id]);

    if (!executor) return;

    const handleClickDelete = () => {
        dispatch(deleteExecutorAndRefresh(executor.id));
        onClose();
    };

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
                    background: '#d7e3f5',
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

                    <ExecutorModalStats stats={stats} />
                </Grid>
            </DialogContent>

            <DialogActions sx={{p: 2, justifyContent: 'space-between'}}>
                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={handleClickDelete}
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
