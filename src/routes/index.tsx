import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import { Login } from '../pages/login';
import { Register } from '../pages/register';

export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/home' element={<Dashboard />} />
  </Routes>
);