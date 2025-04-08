/**
 * Id
 */
export type WithId = {
    id: number;
};

/**
 * Приоритет
 */
export type WithPriority = {
    priority: number;
};

/**
 * Название
 */
export type WithName = {
    name: string;
};

/**
 * Пагинация
 */
export type Pagination = {
    isLoading: boolean;
    total: number;
    currentPage: number;
    perPage: number;
};

/**
 * Сортировка
 */
export type Sort = {
    field: string;
    sort: 'asc' | 'desc';
};
