import { useEffect } from 'react';
import { useIntersectionObserver } from '@/shared/lib';
import { Condition, Typography } from '@/shared/ui/kit';
import { useMoviesByGenres } from '../../model';
import { MoviesList, MoviesListSkeleton } from '../list';
import styles from './styles.module.scss';

const CATALOG_CONTENT = {
  title: 'Каталог фильмов и сериалов'
};

export const MoviesByGenres = ({ genresCount = 5 }) => {
  const { isLoading, getMoviesByGenres, moviesByGenres } = useMoviesByGenres();
  const { ref: bottomRef } = useIntersectionObserver<HTMLDivElement>({
    callback: ({ isIntersecting }) => (isIntersecting ? getMoviesByGenres() : undefined)
  });

  useEffect(() => {
    getMoviesByGenres();
  }, []);

  return (
    <section className={styles.catalog}>
      <Typography className={styles.title} variant='heading_2'>{CATALOG_CONTENT.title}</Typography>
      <Condition
        then={<MoviesListSkeleton genresCount={genresCount} />}
        else={<MoviesList moviesByGenres={moviesByGenres} />}
        value={isLoading}
      />
      <div className={styles.bottom} ref={bottomRef} />
    </section>
  );
};
