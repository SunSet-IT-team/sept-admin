import {getImagePath} from '../../../shared/utils/share';
import {Executor} from '../model/types';
import {ExecutorDTO} from './dto';

/**
 * Переводим ExecutorDTO в нормальный Executor
 */
export const mapExecutorDTO = (dto: ExecutorDTO): Executor => {
    return {
        id: `${dto.id}`,
        email: dto.email,
        phone: dto.profile.phone || '',
        name: dto.profile.companyName,
        priority: dto.profile.priority,
        profileImage: dto.profile.profilePhotos
            ? getImagePath(dto.profile.profilePhotos[0].url)
            : '',

        about: dto.profile.about,
        experience: `${dto.profile.experience}`,
        typeService: dto.profile.workFormat,
        city: dto.profile.city || 'Москва',
        orderQty: dto.profile.completedOrders,
        docs: {
            register: dto.profile.registrationDocs
                ? getImagePath(dto.profile.registrationDocs[0].url)
                : '',
            approve: dto.profile.licenseDocs
                ? getImagePath(dto.profile.licenseDocs[0].url)
                : '',
        },
        rating: {
            value: dto.profile.rating,
            count: dto.reviewCount,
        },
    };
};
