import React, {useEffect, useState} from 'react';
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
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
            <DialogTitle sx={{pt: '24px', pr: '36px', pl: '60px', pb: '20px'}}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{fontSize: '20px', lineHeight: '21px'}}
                    >
                        {executor.name}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </DialogTitle>

            <DialogContent sx={{pt: '36px', pr: '36px', pl: '60px'}}>
                <Box sx={{mb: 3}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <StarIcon sx={{color: '#FFC700'}} />
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '14px',
                                lineHeight: '21px',
                                mr: 1,
                                fontWeight: 500,
                            }}
                        >
                            {executor.rating.value.toFixed(1)}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{fontSize: '14px', lineHeight: '21px'}}
                        >
                            {executor.rating.count} оценок
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{fontSize: '15px', lineHeight: '21px'}}
                    >
                        {executor.about}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <ExecutorModalDocs docs={executor.docs} />

                    <ExecutorModalStats
                        stats={stats}
                        handleClickDelete={handleClickDelete}
                    />
                </Grid>
            </DialogContent>
        </Dialog>
    );
};
