import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCESS_API_KEY = import.meta.env.VITE_ACCESS_API_KEY;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  params: {
    language: 'ru',
  },
  headers: {
    Authorization: `Bearer ${ACCESS_API_KEY}`
  }
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    if (!error.response) return Promise.reject(error);

    // 403 — недостаточно прав
    if (status === 403) {
      return Promise.reject(error);
    }

    // 401 — не аутентифицирован
    if (status === 401 && !originalRequest._retry) {
      /*
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = res.data;

        if (newAccessToken) {
          localStorage.setItem('access_token', newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return api(originalRequest); // повтор запроса
        }
      } catch (e) {
        localStorage.removeItem('access_token');
        requestUnauthorized();
        return Promise.reject(e);
      }
      */
    }

    return Promise.reject(error);
  }
);
