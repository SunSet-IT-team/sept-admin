/**
 * Для работы с таблицами
 */

/**
 * Получает тип поля которое поменяли в таблице
 */
export const getChangedFieldName = (
    oldRow: any,
    newRow: any
): string | null => {
    for (const key in newRow) {
        if (newRow[key] !== oldRow[key]) {
            return key;
        }
    }
    return null;
};
