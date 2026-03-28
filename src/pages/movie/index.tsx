import { useEffect } from 'react';
import { useParams } from 'react-router';
import { MoviePreview } from '@/shared/ui';
import { useMoviesStore } from './model';

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
    <main>
      <MoviePreview movie={movie}>
        <MoviePreview.Title />
        <MoviePreview.Info />
        <MoviePreview.Actions>
          <MoviePreview.ButtonWatch />
          <MoviePreview.ButtonTrailer />
          <MoviePreview.ButtonLike />
        </MoviePreview.Actions>
      </MoviePreview>
    </main>
  );
};
