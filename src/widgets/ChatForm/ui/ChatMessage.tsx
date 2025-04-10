import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import {Stack, Typography} from '@mui/material';
import {useStyles} from './styles';
import {useAppSelector} from '../../../app/store/hook';
import {getCurrentUser} from '../../../entities/user/model/selectors';
import {Message} from '../../../entities/chats/model/types';

type ChatMessageProps = Message;

/**
 * Шаблон сообщения чата
 */
export const ChatMessage = ({
    senderId,
    content,
    createdAt,
    readed,
    isLoading,
}: ChatMessageProps) => {
    const styles = useStyles();

    const user = useAppSelector(getCurrentUser);

    const isMyMessage = senderId == user?.id;

    return (
        <Stack sx={isMyMessage ? styles.myMessage : styles.message}>
            {content && (
                <Typography sx={styles.messageContent}>{content}</Typography>
            )}
            <Stack sx={styles.messageAdditional}>
                <Typography sx={styles.messageTime}>{createdAt}</Typography>
                {isMyMessage &&
                    (isLoading ? (
                        <AccessTimeIcon fontSize="small" />
                    ) : readed ? (
                        <DoneAllRoundedIcon fontSize="small" />
                    ) : (
                        <DoneRoundedIcon fontSize="small" />
                    ))}
            </Stack>
        </Stack>
    );
};
