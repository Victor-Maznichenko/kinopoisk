import { Navigate, Outlet, useLocation } from 'react-router';
// import { useProfileStore } from '../shared/store';

export const ProtectedRoute = () => {
  const location = useLocation();
  // const { profile } = useProfileStore();
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    return <Navigate state={{ from: location }} to='/login' />;
  }

  return <Outlet />;
};
