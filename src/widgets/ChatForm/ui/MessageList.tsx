import {Stack, Typography} from '@mui/material';
import {Message} from '../../../entities/chats/model/types';
import {ChatMessage} from './ChatMessage';
import {useStyles} from './styles';
import {useScrollObserver} from '../model/useScrollObserver';

type MessageListProps = {
    messages: Message[];
    additionalInfo?: string;
};

/**
 * Вывод списка сообщений
 */
const MessageList = ({additionalInfo, messages}: MessageListProps) => {
    const styles = useStyles();

    const {messageListRef} = useScrollObserver(messages);

    return (
        <Stack sx={styles.messageWrapper}>
            {additionalInfo && (
                <Typography sx={styles.additionalInfo}>
                    {additionalInfo}
                </Typography>
            )}

            <Stack sx={styles.messageList} ref={messageListRef}>
                {messages.map((m) => (
                    <ChatMessage key={m.id} {...m} />
                ))}
            </Stack>
        </Stack>
    );
};

export default MessageList;
