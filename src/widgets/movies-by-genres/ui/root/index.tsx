import { use, useEffect, useState } from 'react';
import { ToggleContext } from '@/shared/context';
import { Button, Condition, Typography } from '@/shared/ui/kit';
import { useMoviesByGenres } from '../../model';
import { MoviesList, MoviesListSkeleton } from '../list';
import styles from './styles.module.scss';

const CATALOG_CONTENT = {
  title: 'Каталог фильмов и сериалов'
};

export const MoviesByGenres = ({ genresCount = 5 }) => {
  const [isShortList, setIsShortList] = useState(true);
  const { isLoading, getMoviesByGenres, moviesByGenres } = useMoviesByGenres();
  const { isOpen } = use(ToggleContext);

  useEffect(() => {
    getMoviesByGenres();
  }, []);

  const list = isShortList ? moviesByGenres.slice(0, genresCount) : moviesByGenres;
  const buttonText = isShortList ? 'Посмотреть всё' : 'Скрыть';
  const handleClick = () => setIsShortList((state) => !state);

  return (
    <section className={styles.catalog}>
      <Typography className={styles.title} variant='heading_2'>{CATALOG_CONTENT.title}</Typography>
      <Condition
        then={<MoviesListSkeleton genresCount={genresCount} />}
        else={<MoviesList moviesByGenres={list} />}
        value={isOpen}
      />
      <Button variant='outline-white' onClick={handleClick}>{buttonText}</Button>
    </section>
  );
};
