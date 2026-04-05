import clsx from 'clsx';
import { memo } from 'react';
import { Skeleton } from '@/shared/ui';
import styles from './styles.module.scss';

interface ReviewCardSkeletonProps {
  className?: string;
}

export const ReviewCardSkeleton = memo(({ className }: ReviewCardSkeletonProps) => (
  <div className={clsx(className, styles.reviewCard)}>
    <div className={styles.person}>
      <Skeleton variant='circle' />
      <div>
        <Skeleton variant='text' textLines={2} width={125} />
      </div>
    </div>
    <div className={styles.overview}>
      <Skeleton variant='text' width='50%' />
    </div>
    <Skeleton variant='text' textLines={4} />
  </div>
));
