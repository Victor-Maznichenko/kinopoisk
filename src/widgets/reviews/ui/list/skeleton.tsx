import { ReviewCardSkeleton } from '../card/skeleton';
import styles from './styles.module.scss';

export const ReviewsListSkeleton = ({ limit = 2 }) => (
  <div className={styles.reviewsList}>
    {Array.from({ length: limit }).map((_, i) => (
      <ReviewCardSkeleton
        className={styles.review}
        key={i}
      />
    ))}
  </div>
);
