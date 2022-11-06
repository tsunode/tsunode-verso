import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './providers/authContext';
import { RoutesMain as Routes } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyle';

export const App = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </>
);
