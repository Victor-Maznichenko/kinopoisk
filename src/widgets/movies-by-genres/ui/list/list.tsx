import type { MoviesByGenre } from '../../types';
import { Link } from 'react-router';
import { buildStaticURL, ROUTES } from '@/shared/lib';
import { Condition, SliderDefault, Typography } from '@/shared/ui/kit';
import { MovieCard } from '@/shared/ui/modules';
import styles from './styles.module.scss';

interface MoviesListProps {
  moviesByGenres: MoviesByGenre[],
}

export const MoviesList = ({ moviesByGenres }: MoviesListProps) => (
  <div className={styles.genresList}>
    {
      moviesByGenres.map(({ id, name, list }) => (
        <div className={styles.genre} key={id}>
          <Typography className={styles.genreTitle} variant='heading_4' as='h4'>{name}</Typography>
          <Condition
            then={(
              <SliderDefault.Root
                className={styles.slider}
                prev={<SliderDefault.Prev className={styles.arrow} />}
                next={<SliderDefault.Next className={styles.arrow} />}
                slidesPerView={4}
                spaceBetween={20}
              >
                {list.map(({ id, title, poster_path, vote_average, genres_names }) => (
                  <SliderDefault.Slide key={id}>
                    <MovieCard
                      to={ROUTES.MOVIE.replace(':id', String(id))}
                      previewSrc={buildStaticURL(poster_path)}
                      categories={genres_names}
                      rate={vote_average}
                      title={title}
                      as={Link}
                    />
                  </SliderDefault.Slide>
                ))}
              </SliderDefault.Root>
            )}
            else={(
              <div className={styles.list}>
                {list.map(({ id, title, poster_path, vote_average, genres_names }) => (
                  <MovieCard
                    to={ROUTES.MOVIE.replace(':id', String(id))}
                    previewSrc={buildStaticURL(poster_path)}
                    categories={genres_names}
                    rate={vote_average}
                    title={title}
                    as={Link}
                    key={id}
                  />
                ))}
              </div>
            )}
            value={list.length > 4}
          />

        </div>
      ))
    }
  </div>
);
