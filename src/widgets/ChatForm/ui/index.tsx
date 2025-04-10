import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
} from '@mui/material';
import {useState} from 'react';
import {Chat, Message} from '../../../entities/chats/model/types';
import MessageList from './MessageList';
import ChatHeader from './ChatHeader';
import {useStyles} from './styles';
import {SendIcon} from '../../../shared/ui/icons/SendIcon';
import {useNavigate} from 'react-router-dom';
import {SlugPages} from '../../../app/routes/pages';
import {useAppDispatch, useAppSelector} from '../../../app/store/hook';
import {getCurrentUser} from '../../../entities/user/model/selectors';
import {receivedMessage} from '../../../entities/chats/model/slice';

type ChatFormProps = Chat;

export const ChatForm = ({
    interlocutor,
    additionalInfo,
    messages,
    ...chat
}: ChatFormProps) => {
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const user = useAppSelector(getCurrentUser);

    const handleCloseChat = () => {
        navigate(`/${SlugPages.CHAT}`);
    };

    const handleSend = () => {
        if (!message.trim()) return; // Не отправляем пустые сообщения

        const newMessage: Message = {
            id: Date.now().toString(), // Используем timestamp как временный ID
            chatId: chat.id,
            senderId: user?.id || 0,
            isLoading: true,
            readed: false,
            createdAt: new Date().toLocaleTimeString(),
            content: message,
        };

        dispatch(receivedMessage(newMessage));
        setMessage('');
    };

    const handleAttach = () => {
        alert('Прикрепление файлов пока не работает');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const styles = useStyles();

    return (
        <Box sx={styles.form}>
            <ChatHeader interlocutor={interlocutor} />

            <MessageList messages={messages} additionalInfo={additionalInfo} />

            <Stack sx={styles.messageForm}>
                <Box
                    sx={{display: 'flex', width: '100%', alignItems: 'center'}}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        value={message}
                        placeholder="Написать сообщение..."
                        sx={styles.messageArea}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={handleKeyPress}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{pl: 1}}
                                    >
                                        <IconButton
                                            edge="start"
                                            onClick={handleAttach}
                                            sx={{p: 0}}
                                        >
                                            <AddCircleOutlineRoundedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleSend}
                                            disabled={!message.trim()}
                                        >
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleCloseChat}
                >
                    Закрыть чат
                </Button>
            </Stack>
        </Box>
    );
};
