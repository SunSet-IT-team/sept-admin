import {Navigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../app/store/hook';
import {getChat} from '../../entities/chats/model/selectors';
import {ChatForm} from '../../widgets/ChatForm/ui';

/**
 * Страница чата
 */
const ChatPage = () => {
    const {chatId} = useParams();
    const chat = useAppSelector(getChat(chatId ? Number(chatId) : -1));

    if (!chatId || !chat) return <Navigate to="/" />;

    return <ChatForm {...chat} />;
};

export default ChatPage;
