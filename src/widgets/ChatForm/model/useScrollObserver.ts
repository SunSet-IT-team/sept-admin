import {useEffect, useRef} from 'react';

/**
 * Отслеживает изменения и скроллить до конца
 */
export const useScrollObserver = (data: any) => {
    const messageListRef = useRef<HTMLDivElement>(null); // Реф на контейнер списка

    // Скролл вниз при изменении messages
    useEffect(() => {
        if (!messageListRef || !messageListRef.current) return;

        // Если скролл уже внизу или почти внизу — скроллим
        const {scrollTop, scrollHeight, clientHeight} = messageListRef.current;
        const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 200;

        if (isNearBottom) {
            // Небольшая задержка для гарантированного обновления DOM
            setTimeout(() => {
                if (!messageListRef || !messageListRef.current) return;

                messageListRef.current.scrollTo({
                    top: messageListRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }, 50);
        }
    }, [data]);

    return {
        messageListRef,
    };
};
