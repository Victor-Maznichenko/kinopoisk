import type { MoviesByGenre } from './types';
import type { GenreMovieList200GenresItem } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';
import { toast } from '@/shared/ui/kit';

const LIMIT = 5;
const findGenreById = (genres: GenreMovieList200GenresItem[], id: number) => genres.find((g) => g.id === id);

interface MoviesByGenreState {
  getMoviesByGenres: () => Promise<void>,
  genres: GenreMovieList200GenresItem[],
  moviesByGenres: MoviesByGenre[],
  getGenres: () => Promise<void>,
  isLoading: boolean,
  offset: number,
  limit: number,
}

export const useMoviesByGenres = create<MoviesByGenreState>()((set, get) => ({
  isLoading: true,
  moviesByGenres: [],
  genres: [],
  offset: 0,
  limit: LIMIT,

  getGenres: async () => {
    try {
      const genresResponse = await requests.genreMovieList();
      set({
        genres: genresResponse.data?.genres ?? []
      });
    } catch (error) {
      console.error(error);
      toast.add({
        title: 'Ошибка',
        message: 'Не удалось загрузить жанры. Попробуйте позже.',
        variant: 'error'
      });
    }
  },

  getMoviesByGenres: async () => {
    try {
      const { genres, getGenres, limit, offset } = get();
      if (!genres.length) await getGenres();

      const promises = genres
        .slice(offset, offset + limit)
        .map(({ id }) =>
          requests.discoverMovie({
            with_genres: String(id ?? -1)
          })
        );

      const responses = await Promise.all(promises);
      const results = responses.map((response) => response.data.results);
      const preparedData = results.map((moviesByGenre, i) => {
        const { name, id } = genres[i];

        if (!name || !id || !moviesByGenre) {
          throw new Error('Неверный ответ от сервера');
        }

        moviesByGenre = moviesByGenre.map(({ genre_ids = [], ...movie }) => ({
          ...movie,
          genre_ids,
          genres_names: genre_ids.map((id) => findGenreById(genres, id)?.name ?? '')
        }));

        return { id, name, list: moviesByGenre };
      });

      set(({ moviesByGenres }) => ({
        moviesByGenres: [...moviesByGenres, ...preparedData],
        offset: offset + limit,
        isLoading: false
      }));
    } catch (error) {
      toast.add({
        title: 'Ошибка',
        message: 'Не удалось загрузить фильмы по жанрам. Попробуйте позже.',
        variant: 'error'
      });
      console.error(error);
    }
  }
}));
