import { MoviesByGenres } from '@/widgets/movies-by-genres';
import { Main } from '../main';

export const HomePage = () => (
  <main className='container'>
    <Main />
    <MoviesByGenres />
  </main>
);
