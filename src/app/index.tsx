import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToggleContextProvider } from '@/shared/context';
import { ROUTES } from '@/shared/lib';
import { HomePage, MoviePage, NotFoundPage } from '@/pages';
import { ToastProvider } from '@/shared/ui/kit';
import { Layout } from './layout';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.MOVIE, element: <MoviePage /> }
    ]
  }
]);

export const App = () => (
  <ToggleContextProvider>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </ToggleContextProvider>
);
