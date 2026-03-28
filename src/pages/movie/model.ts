import type { MovieDetails200 } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';

interface MovieState {
  getMovie: (id: number) => Promise<void>;
  movie: Required<MovieDetails200> | null;
  error: string | null;

  isLoading: boolean;
  reset: () => void;
}

const initialState = {
  isLoading: false,
  error: null,
  movie: null
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
