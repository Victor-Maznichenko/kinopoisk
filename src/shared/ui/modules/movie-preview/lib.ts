import type { MovieDetails200 } from '@/shared/api';
import { createContext, use } from 'react';

export const MoviePreviewContext = createContext<DeepRequired<MovieDetails200> | null>(null);

export const useMoviePreviewContext = () => {
  const contextValue = use(MoviePreviewContext);

  if (!contextValue) {
    throw new Error('useMoviePreviewContext must be used within a <MoviePreview />');
  }

  return contextValue;
};
