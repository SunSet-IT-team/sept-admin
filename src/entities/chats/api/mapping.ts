import {Chat} from 'sunset-chat';
import {ChatDTO} from './dto';
import {getImagePath} from '../../../shared/utils/share';

/**
 * Перевод DTO в нормальный вид
 * для чатов
 */
export const mapChatDTO = (chat: ChatDTO): Chat => {
    const user = chat.participants.find((el) => el.user.role != 'ADMIN');

    return {
        id: chat.id,
        currentUserId: 0,
        additionalInfo: chat.theme,
        messages: [],
        newMessages: chat.newMessages,
        chatUser: {
            id: user?.id || 0,
            name:
                user?.user.name ||
                user?.user.profile.companyName ||
                'Пользователь',
            imagePath: user?.user.profile?.profilePhotos[0]
                ? getImagePath(user.user.profile.profilePhotos[0].url)
                : '',
        },
    };
};
