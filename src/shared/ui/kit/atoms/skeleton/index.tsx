import type { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type SkeletonVariant = 'circle' | 'square' | 'text';

interface SkeletonProps {
  lineHeight?: CSSProperties['lineHeight'];
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  variant?: SkeletonVariant;
  className?: string;
  textLines?: number;
}

export const Skeleton = ({
  className,
  variant = 'square',
  width,
  height,
  lineHeight = 'inherit',
  textLines = 1
}: SkeletonProps) => {
  const skeletonClassName = clsx(
    styles.skeleton,
    styles[variant],
    className
  );

  if (variant === 'text') {
    const computedWidth = width ?? '100%';

    return (
      <div className={styles.textGroup} style={{ width: computedWidth, height, lineHeight }}>
        {Array.from({ length: textLines }).map((_, i) => {
          const isLast = i === textLines - 1 && i !== 0;
          const textWidth = isLast ? '70%' : '100%';

          return (
            <p
              className={skeletonClassName}
              style={{ width: textWidth }}
              aria-hidden='true'
              key={i}
            >
              ‌
            </p>
          );
        })}
      </div>
    );
  }

  if (variant === 'circle') {
    const computedWidth = width ?? 54;

    return (
      <div
        className={skeletonClassName}
        style={{ width: computedWidth }}
        aria-hidden='true'
      />
    );
  }

  const computedWidth = width ?? '100%';
  const computedHeight = height ?? '100%';

  return (
    <div
      className={skeletonClassName}
      style={{ width: computedWidth, height: computedHeight }}
      aria-hidden='true'
    />
  );
};
