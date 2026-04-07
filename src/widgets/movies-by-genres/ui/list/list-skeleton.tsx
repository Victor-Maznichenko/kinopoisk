import { Skeleton, Typography } from '@/shared/ui/kit';
import styles from './styles.module.scss';

interface MoviesListSkeletonProps {
  genresCount: number,
}

export const MoviesListSkeleton = ({ genresCount }: MoviesListSkeletonProps) => (
  <div className={styles.genresList}>
    {
      Array.from({ length: genresCount }).map((_, i) => (
        <div className={styles.genre} key={i}>
          <Typography className={styles.genreTitle} variant='heading_4' as='h4'>
            <Skeleton variant='text' width={150} />
          </Typography>
          <div className={styles.skeletonSlider}>
            {
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <Skeleton height={245} key={i} />
                  <Skeleton variant='text' width={150} height={15} key={i} />
                </div>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
);
