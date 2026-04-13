import type { MovieReviews200ResultsItem } from '@/shared/api';
import { create } from 'zustand';
import { requests } from '@/shared/api';
import { toast } from '@/shared/ui/kit';

type ReviewsList = DeepRequired<MovieReviews200ResultsItem>[];

interface ReviewsState {
  getReviews: (id: number) => Promise<void>;
  error: string | null;
  isLoading: boolean;

  list: ReviewsList;
  reset: () => void;
}

const initialState = {
  isLoading: false,
  error: null,
  list: []
};

export const useReviewsStore = create<ReviewsState>()((set) => ({
  ...initialState,
  getReviews: async (id) => {
    try {
      const response = await requests.movieReviews(id, { language: 'en-US' });
      const list = response.data.results as ReviewsList ?? [];
      set({ list });
    } catch (error) {
      console.error(error);
      toast.add({
        title: 'Ошибка',
        message: 'Не удалось загрузить отзывы. Попробуйте позже.',
        variant: 'error'
      });
    }
  },
  reset: () => {
    set(initialState);
  }
}));
