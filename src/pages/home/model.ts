import type { MoviePopularList200ResultsItem } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';
import { toast } from '@/shared/ui/kit';

interface HomeState {
  popularMovies: MoviePopularList200ResultsItem[],
  getPopularMovies: () => Promise<void>,
  isLoading: boolean,
}

export const usePopularMovies = create<HomeState>()((set) => ({
  isLoading: true,
  popularMovies: [],

  getPopularMovies: async () => {
    try {
      const response = await requests.moviePopularList();
      const popularMovies = response.data?.results ?? [];
      set((state) => ({ ...state, popularMovies }));
    } catch (error) {
      toast.add({
        title: 'Ошибка',
        message: 'Не удалось загрузить популярные фильмы. Попробуйте позже.',
        variant: 'error'
      });
      console.error(error);
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  }
}));
