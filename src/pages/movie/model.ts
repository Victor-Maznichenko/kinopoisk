import type { MovieDetails200 } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';

interface MovieState {
  movie: DeepRequired<MovieDetails200> | null;
  getMovie: (id: number) => Promise<void>;
  error: string | null;

  isLoading: boolean;
  reset: () => void;
}

const initialMovieState: DeepRequired<MovieDetails200> = {
  id: 0,
  title: '',
  overview: '',
  release_date: '',
  vote_average: 0,
  origin_country: [],
  genres: [],
  runtime: 0,
  adult: false,
  backdrop_path: '',
  belongs_to_collection: {
    id: undefined,
    name: undefined,
    poster_path: undefined,
    backdrop_path: undefined
  },
  budget: 0,
  homepage: '',
  imdb_id: '',
  original_language: '',
  original_title: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  revenue: 0,
  spoken_languages: [],
  status: '',
  tagline: '',
  video: false,
  vote_count: 0
};

const initialState = {
  isLoading: false,
  error: null,
  movie: initialMovieState
};

export const useMoviesStore = create<MovieState>()((set) => ({
  ...initialState,
  getMovie: async (id) => {
    try {
      const response = await requests.movieDetails(id);
      const movie = response.data as Required<MovieDetails200> ?? null;
      set({ movie });
    } catch (error) {
      // TODO: заменить на toast
      console.error(error);
    }
  },
  reset: () => {
    set(initialState);
  }
}));
