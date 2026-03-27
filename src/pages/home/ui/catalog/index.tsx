import { useEffect, useState } from 'react';
import { buildStaticURL } from '@/shared/lib';
import { useMoviesStore } from '@/entities/movies';
import { Button, MovieCard, SliderDefault, Typography } from '@/shared/ui';
import styles from './styles.module.scss';

const SHORTEST_LENGTH = 5;

export const Catalog = () => {
  const [isShortList, setIsShortList] = useState(true);
  const { getMoviesByGenres, moviesByGenres } = useMoviesStore();

  useEffect(() => {
    getMoviesByGenres();
  }, []);

  const genresLength = isShortList ? SHORTEST_LENGTH : moviesByGenres.length;
  const buttonText = isShortList ? 'Посмотреть всё' : 'Скрыть';
  const handleClick = () => setIsShortList((state) => !state);

  return (
    <section className={styles.catalog}>
      <Typography className={styles.title} variant='heading_2'>Каталог фильмов и сериалов</Typography>
      <div className={styles.genresList}>
        {
          moviesByGenres.slice(0, genresLength).map(({ id, name, list }) => (
            <div className={styles.genre} key={id}>
              <Typography className={styles.genreTitle} variant='heading_4' as='h4'>{name}</Typography>
              <SliderDefault.Root slidesPerView={4}>
                {list.map(({ id, title, poster_path, vote_average, genres_names }) => (
                  <SliderDefault.Slide key={id}>
                    <MovieCard
                      previewSrc={buildStaticURL(poster_path)}
                      categories={genres_names}
                      rate={vote_average}
                      title={title}
                    />
                  </SliderDefault.Slide>
                ))}
              </SliderDefault.Root>
            </div>
          ))
        }
      </div>
      <Button variant='outline-white' onClick={handleClick}>{buttonText}</Button>
    </section>
  );
};
