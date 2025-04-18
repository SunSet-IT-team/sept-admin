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
        phone: dto.profile.phone,
        name: dto.profile.companyName,
        priority: dto.profile.priority,
        profileImage: dto.profile.profilePhoto
            ? getImagePath(dto.profile.profilePhoto.url)
            : '',

        about: dto.profile.about,
        experience: `${dto.profile.experience}`,
        typeService: dto.profile.workFormat,
        city: dto.profile.city || 'Москва',
        orderQty: dto.profile.completedOrders,
        docs: {
            register: dto.profile.registrationDoc
                ? getImagePath(dto.profile.registrationDoc.url)
                : '',
            approve: dto.profile.licenseDoc
                ? getImagePath(dto.profile.licenseDoc.url)
                : '',
        },
        rating: {
            value: dto.profile.rating,
            count: dto.reviewsCount,
        },
    };
};
