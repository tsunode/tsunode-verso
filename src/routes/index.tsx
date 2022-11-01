import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import { Login } from '../pages/login';
import { NewProject } from '../pages/newProject';
import { Register } from '../pages/register';

export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Register />} />
    <Route path='/home' element={<Dashboard />} />
    <Route path='/new-project' element={<NewProject />} />
  </Routes>
);
