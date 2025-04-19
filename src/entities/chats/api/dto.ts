import {ServerAns} from '../../../shared/types/share';
import {FileDTO} from '../../executors/api/dto';

/**
 * DTO для получения всех чатов
 */
export type GetAllDto = ServerAns<{
    items: ChatDTO[];
    limit: number;
    page: number;
    total: number;
}>;
/**
 * DTO чата
 */
export type ChatDTO = {
    theme: string;
    orderId: string;
    id: number;
    participants: {
        chatId: number;
        id: number;
        userId: number;
        user: {
            name: string;
            profile: {
                companyName: string;
                profilePhoto?: FileDTO;
            };
            role: 'CUSTOMER' | 'EXECUTOR' | 'ADMIN';
        };
    }[];
};
