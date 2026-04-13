import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from '@/shared/lib';
import { HomePage, MoviePage, NotFoundPage } from '@/pages';
import { Toaster } from '@/shared/ui/kit';
import { Layout } from './layout';

history.scrollRestoration = 'manual';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.MOVIE, element: <MoviePage /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);

export const App = () => (
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
