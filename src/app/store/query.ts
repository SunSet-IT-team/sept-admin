import {QueryClient} from '@tanstack/react-query';

/**
 * Настройка стора для React-query
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            staleTime: 60 * 1000, // 1 минута
        },
    },
});
