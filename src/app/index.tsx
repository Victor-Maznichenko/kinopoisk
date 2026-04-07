import { createBrowserRouter, RouterProvider } from 'react-router';
import { ROUTES } from '@/shared/lib';
import { HomePage, MoviePage, NotFoundPage } from '@/pages';
import { ToastProvider } from '@/shared/ui/kit';
import { Layout } from './layout';

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
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>
);
