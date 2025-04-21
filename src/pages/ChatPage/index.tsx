import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../app/store/hook';
import {getChat} from '../../entities/chats/model/selectors';
import {Box} from '@mui/material';
import {getCurrentUser} from '../../entities/user/model/selectors';
import {ChatForm} from 'sunset-chat';

/**
 * Страница чата
 */
const ChatPage = () => {
    const {chatId} = useParams();
    const chat = useAppSelector(getChat(chatId ? Number(chatId) : -1));
    const user = useAppSelector(getCurrentUser);

    const navigate = useNavigate();

    if (!chatId || !chat || !user) return <Navigate to="/" />;

    return (
        <Box height="100dvh">
            <ChatForm
                chat={{...chat, currentUserId: user.id}}
                handleCloseChat={() => navigate('/chat')}
            />
        </Box>
    );
};

export default ChatPage;
