import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from '@/shared/lib';
import { Toaster } from '@/shared/ui/kit';
import { Layout } from './layout';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import('@/pages/home');
          return { Component: HomePage };
        }
      },
      {
        path: ROUTES.MOVIE,
        lazy: async () => {
          const { MoviePage } = await import('@/pages/movie');
          return { Component: MoviePage };
        }
      },
      {
        path: '*',
        lazy: async () => {
          const { NotFoundPage } = await import('@/pages/not-found');
          return { Component: NotFoundPage };
        }
      }
    ]
  }
]);

export const App = () => (
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
