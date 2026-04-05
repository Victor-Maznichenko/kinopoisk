import clsx from 'clsx';
import { MoviesByGenres } from '@/widgets/movies-by-genres';
import { Main } from '../main';
import styles from './styles.module.scss';

export const HomePage = () => (
  <main className={clsx((styles.home, 'container'))}>
    <Main />
    <MoviesByGenres />
  </main>
);
