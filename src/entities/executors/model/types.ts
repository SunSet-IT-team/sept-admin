import {
    WithEmail,
    WithId,
    WithName,
    WithPhone,
    WithPriority,
} from '../../../shared/types/share';

/**
 * Исполнитель
 */
export type Executor = WithPriority &
    WithId &
    WithName &
    WithEmail &
    WithPhone & {
        profileImage: string;
        about: string;
        experience: string;
        typeService: ExecutorServiceType;
        city: string;
        docs: {
            register: string;
            approve: string;
        };
        rating: {
            value: number;
            count: number;
        };
    };

/**
 * Формы оказания услуг
 */
export enum ExecutorServiceType {
    // ИП
    SOLE = 'SOLE',

    // Юридическое лицо
    LEGAL_ENTITY = 'LEGAL_ENTITY',

    // Частник
    PRIVATE_PERSON = 'PRIVATE_PERSON',
}
