import type { DiscoverMovie200ResultsItem } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';

interface MoviesByGenre {
  list: (DiscoverMovie200ResultsItem & { genres_names?: string[] })[];
  name: string;
  id: number;
}

interface HomeState {
  getMoviesByGenres: () => Promise<void>,
  moviesByGenres: MoviesByGenre[],
  isLoading: boolean,
}

export const useMoviesByGenres = create<HomeState>()((set) => ({
  isLoading: true,
  moviesByGenres: [],

  getMoviesByGenres: async () => {
    try {
      const genresResponse = await requests.genreMovieList();
      const genresMovieList = genresResponse.data?.genres ?? [];

      const moviesPromises = genresMovieList.map(({ id = -1 }) => requests.discoverMovie({ with_genres: String(id) }));
      const moviesResponse = (await Promise.all(moviesPromises)).map((response) => response.data.results);
      const moviesByGenres = moviesResponse.map((moviesInGenre, i) => {
        const { name, id } = genresMovieList[i];

        if (!name || !id || !moviesInGenre) {
          throw new Error('Неверный ответ от сервера');
        }

        moviesInGenre = moviesInGenre.map(({ genre_ids = [], ...movieInGenre }) => ({
          ...movieInGenre,
          genre_ids,
          genres_names: genre_ids.map((id) => genresMovieList.find((g) => g.id === id)?.name ?? '')
        }));

        return { id, name, list: moviesInGenre };
      });

      set((state) => ({
        ...state,
        moviesByGenres
      }));
    } catch (error) {
      // TODO: заменить на toast
      console.error(error);
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  }
}));
