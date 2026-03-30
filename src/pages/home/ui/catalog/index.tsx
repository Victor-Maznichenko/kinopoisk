import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { buildStaticURL, ROUTES } from '@/shared/lib';
import { Button, MovieCard, SliderDefault, Typography } from '@/shared/ui';
import { useHomeStore } from '../../model';
import styles from './styles.module.scss';

export const Catalog = ({ genresCount = 5 }) => {
  const [isShortList, setIsShortList] = useState(true);
  const { getMoviesByGenres, moviesByGenres } = useHomeStore();

  useEffect(() => {
    getMoviesByGenres();
  }, []);

  const genresLength = isShortList ? genresCount : moviesByGenres.length;
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
            </div>
          ))
        }
      </div>
      <Button variant='outline-white' onClick={handleClick}>{buttonText}</Button>
    </section>
  );
};
