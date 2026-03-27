import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTES } from '@/shared/lib';
import { HomePage, LoginPage, NotFoundPage, ProfilePage, RegisterPage } from '@/pages';
import { Footer, Header } from '@/widgets';

const Layout = () => (
  <div className='container'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.PROFILE, element: <ProfilePage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.REGISTER, element: <RegisterPage /> }
    ]
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
