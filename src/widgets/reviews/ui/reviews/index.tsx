import { useEffect, useState } from 'react';
import { Button, Typography } from '@/shared/ui';
import { useReviewsStore } from '../../model';
import { ReviewCard } from '../review-card';
import styles from './styles.module.scss';

interface ReviewsProps {
  movieId: number;
}

const LIMIT = 2;

export const Reviews = ({ movieId }: ReviewsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { list, getReviews, reset } = useReviewsStore();

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

      <div className={styles.reviewsList}>
        {displayedReviews.map((review) => (
          <ReviewCard
            className={styles.review}
            key={review.id}
            {...review}
          />
        ))}

        {hasExpandedButton && (
          <Button variant='outline-white' onClick={handleToggle}>
            {isExpanded ? 'Свернуть' : 'Посмотреть всё'}
          </Button>
        )}
      </div>
    </div>
  );
};
