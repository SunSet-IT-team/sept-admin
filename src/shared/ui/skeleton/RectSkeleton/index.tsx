import {Skeleton} from '@mui/material';
import React from 'react';

interface RectSkeletonProps {
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
    animation?: 'pulse' | 'wave' | false;
    variant?: 'rectangular' | 'circular' | 'rounded';
    className?: string;
}

export const RectSkeleton: React.FC<RectSkeletonProps> = ({
    width = 100,
    height = 20,
    borderRadius = 4,
    animation = 'pulse',
    variant = 'rectangular',
    className,
}) => {
    return (
        <Skeleton
            variant={variant}
            width={width}
            height={height}
            animation={animation}
            className={className}
            sx={{
                borderRadius:
                    typeof borderRadius === 'number'
                        ? `${borderRadius}px`
                        : borderRadius,
            }}
        />
    );
};
