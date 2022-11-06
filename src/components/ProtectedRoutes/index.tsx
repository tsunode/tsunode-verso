import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/authContext';
import { ProjectProvider } from '../../providers/projectContext';

export const ProtectedRoutes = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <ProjectProvider>
      <Outlet />
    </ProjectProvider>
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};
