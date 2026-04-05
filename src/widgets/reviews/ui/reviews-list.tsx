import type { MovieReviews200ResultsItem } from '@/shared/api';
import { ReviewCard } from '@/shared/ui';
import styles from './styles.module.scss';

interface ReviewsListProps {
  reviews: DeepRequired<MovieReviews200ResultsItem>[],
}

export const ReviewsList = ({ reviews }: ReviewsListProps) => (
  <div className={styles.reviewsList}>
    {reviews.map((review) => (
      <ReviewCard
        className={styles.review}
        key={review.id}
        {...review}
      />
    ))}
  </div>
);
