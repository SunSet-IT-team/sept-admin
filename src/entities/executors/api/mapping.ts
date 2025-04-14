import {Executor} from '../model/types';
import {ExecutorDTO} from './dto';

/**
 * Переводим ExecutorDTO в нормальный Executor
 */
export const mapExecutorDTO = (dto: ExecutorDTO): Executor => {
    return {
        id: `${dto.id}`,
        email: dto.email,
        phone: dto.profile.phone,
        name: dto.profile.companyName,
        priority: dto.profile.priority,
        profileImage: dto.profile.profilePhoto || '',

        about: dto.profile.about,
        experience: `${dto.profile.experience}`,
        typeService: dto.profile.workFormat,
        city: dto.profile.city || 'Москва',
        orderQty: dto.profile.completedOrders,
        docs: {
            register: '',
            approve: '',
        },
        rating: {
            value: dto.profile.rating,
            count: 10,
        },
    };
};
