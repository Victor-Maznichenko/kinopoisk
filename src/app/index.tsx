import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTES } from '@/shared/lib';
import { HomePage, LoginPage, MoviePage, NotFoundPage, ProfilePage, RegisterPage } from '@/pages';
import { Footer, Header } from '@/widgets';
import styles from './styles.module.scss';

const Layout = () => (
  <>
    <Header className={styles.header} />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.PROFILE, element: <ProfilePage /> },
      { path: ROUTES.MOVIE, element: <MoviePage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.REGISTER, element: <RegisterPage /> }
    ]
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
