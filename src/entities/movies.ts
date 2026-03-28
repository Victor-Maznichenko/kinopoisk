import type { DiscoverMovie200ResultsItem, MoviePopularList200ResultsItem } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';

interface MoviesByGenre {
  list: (DiscoverMovie200ResultsItem & { genres_names?: string[] })[];
  name: string;
  id: number;
}

interface MoviesState {
  popularMovies: MoviePopularList200ResultsItem[],
  getMoviesByGenres: () => Promise<void>,
  getPopularMovies: () => Promise<void>,
  moviesByGenres: MoviesByGenre[]
}

export const useMoviesStore = create<MoviesState>()((set) => ({
  popularMovies: [],
  moviesByGenres: [],

  // Question: по факту popularMovies выдает только 1 страницу всегда, может вызвать путаницу как будто. Слайдер не требует большого числа фильмов, вынести в модуль homePage эту model или как?
  // В query params не limit, skip только page, total_pages, currentPage в идеале тогда хранить в состоянии, но мне этот функционал не нужен.
  getPopularMovies: async () => {
    try {
      const response = await requests.moviePopularList();
      const popularMovies = response.data?.results ?? [];
      set((state) => ({ ...state, popularMovies }));
    } catch (error) {
      // TODO: заменить на toast
      console.error(error);
    }
  },

  /** Получить фильмы по жанрам */
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
    }
  }
}));
