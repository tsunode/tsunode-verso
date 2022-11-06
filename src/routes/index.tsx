import { Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { Dashboard } from '../pages/dashboard';
import { Login } from '../pages/login';
import { NewProject } from '../pages/newProject';
import { Register } from '../pages/register';

export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Register />} />

    <Route element={<ProtectedRoutes />}>
      <Route path='/home' element={<Dashboard />} />
      <Route path='/new-project' element={<NewProject />} />
    </Route>
  </Routes>
);
