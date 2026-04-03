import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Reviews } from '@/widgets';
import { MoviePreview, Typography } from '@/shared/ui';
import { useMoviesStore } from './model';
import styles from './styles.module.scss';

const MOVIE_CONTENT = {
  aboutTitle: 'О фильме'
};

export const MoviePage = () => {
  const id = useParams()?.id ?? '-1';
  const { movie, getMovie, reset } = useMoviesStore();

  useEffect(() => {
    getMovie(Number(id));
    return () => reset();
  }, [id]);

  if (!movie) {
    return null;
  }

  return (
    <main className={styles.root}>
      <MoviePreview movie={movie}>
        <MoviePreview.Title />
        <MoviePreview.Info />
        <MoviePreview.Actions>
          <MoviePreview.ButtonWatch />
          <MoviePreview.ButtonTrailer />
          <MoviePreview.ButtonLike />
        </MoviePreview.Actions>
      </MoviePreview>

      <div className='container'>
        <section className={styles.info}>
          <div className={styles.details}>
            <div className={styles.about}>
              <Typography className={styles.title} variant='heading_2' as='h2'>{MOVIE_CONTENT.aboutTitle}</Typography>
              <Typography>{movie.overview}</Typography>
            </div>

            <Reviews movieId={Number(id)} />

          </div>
          <div className={styles.stats}></div>
        </section>
      </div>
    </main>
  );
};
