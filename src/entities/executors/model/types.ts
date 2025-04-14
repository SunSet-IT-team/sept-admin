import {
    WithEmail,
    WithId,
    WithName,
    WithPhone,
    WithPriority,
} from '../../../shared/types/share';

/**
 * Слайс для хранения данных об исполнителях
 */
export interface ExecutorsSlice {
    executors: Executor[];
    isLoading: boolean;
}

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
        orderQty: number;
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
    /**
     * Физ лицо
     */
    INDIVIDUAL = 'INDIVIDUAL',

    /**
     * ООО
     */
    LEGAL_ENTITY = 'LEGAL_ENTITY',

    /**
     * ИП
     */
    SOLE_PROPRIETOR = 'SOLE_PROPRIETOR',
}
