import { create } from 'zustand';
import { requests } from '@/shared/api';

interface SessionState {
  getRequestToken: () => Promise<void>;
  // getGuestSession: () => Promise<void>;
  // getSession: () => Promise<void>;
  isLoading: boolean;
}

export const useSessionStore = create<SessionState>()(() => ({
  isLoading: false,
  getRequestToken: async () => {
    try {
      const response = await requests.authenticationCreateRequestToken();
      const requestToken = response.data?.request_token ?? null;
      if (requestToken) {
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/approved`;
      }

      // Нужно поставить слушатель на страницу // /approved и если добавится queryParam requestToken то начать получение getSession
    } catch (error) {
      // TODO: заменить на toast
      console.error(error);
    }
  }
  // getSession: () => {

  // },
  // getGuestSession: () => {

  // }
}));

// `https://www.themoviedb.org/authenticate/${REQUEST_TOKEN}?redirect_to=${window.location.origin}/approved`
