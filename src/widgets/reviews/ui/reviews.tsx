import { useEffect, useState } from 'react';
import { Button, Condition, Typography } from '@/shared/ui';
import { useReviewsStore } from '../model';
import { ReviewsList } from './reviews-list';
import { ReviewsListSkeleton } from './reviews-list-skeleton';
import styles from './styles.module.scss';

interface ReviewsProps {
  movieId: number;
}

const LIMIT = 2;

export const Reviews = ({ movieId }: ReviewsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLoading, list, getReviews, reset } = useReviewsStore();

  const displayedReviews = isExpanded ? list : list.slice(0, LIMIT);
  const hasExpandedButton = list.length > LIMIT;

  const handleToggle = () => {
    setIsExpanded((state) => !state);
  };

  useEffect(() => {
    getReviews(movieId);

    return () => {
      reset();
    };
  }, [movieId, getReviews, reset]);

  return (
    <div className={styles.reviews}>
      <Typography className={styles.title} variant='heading_2' as='h2'>
        Рецензии
      </Typography>

      {!isLoading && list.length === 0 && (
        <Typography as='p'>
          Рецензий пока нет...
        </Typography>
      )}

      <Condition
        else={<ReviewsList reviews={displayedReviews} />}
        then={<ReviewsListSkeleton limit={LIMIT} />}
        value={isLoading}
      />

      {hasExpandedButton && !isLoading && (
        <Button className={styles.expandButton} variant='outline-white' onClick={handleToggle}>
          {isExpanded ? 'Свернуть' : 'Посмотреть всё'}
        </Button>
      )}
    </div>
  );
};
