import {Grid, Typography, Paper} from '@mui/material';
import {Executor} from '../../../../entities/executors/model/types';

type ExecutorModalDocsProps = {
    docs: Executor['docs'];
};

/**
 * Часть отображения модалки - информация о документах
 */
const ExecutorModalDocs = ({docs}: ExecutorModalDocsProps) => {
    return (
        <Grid size={{xs: 12, md: 6}}>
            <Typography
                variant="subtitle1"
                gutterBottom
                fontWeight="bold"
                sx={{fontSize: '20px', lineHeight: '21px'}}
            >
                Фото документов
            </Typography>
            <Grid container spacing={2}>
                <Grid>
                    <Paper
                        elevation={3}
                        sx={{
                            width: 160,
                            height: 160,
                            borderRadius: 2,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            onClick={() => {
                                window.open(docs.approve, '_blank');
                            }}
                            src={docs.approve}
                            alt={`Документ подтверждения`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid>
                    <Paper
                        elevation={3}
                        sx={{
                            width: 160,
                            height: 160,
                            borderRadius: 2,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={docs.register}
                            onClick={() => {
                                window.open(docs.register, '_blank');
                            }}
                            alt={`Документ регистрации`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ExecutorModalDocs;
