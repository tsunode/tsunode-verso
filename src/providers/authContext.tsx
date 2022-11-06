import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { IUserLogin, createSession } from '../services/sessionsService';
import { getUserMe, IUser } from '../services/usersService';

interface IAuthContext {
  user: IUser | null;
  signIn: (data: IUserLogin) => void;
  loading: boolean;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@tsunode-verso:token');

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const data = await getUserMe();

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const signIn = async (data: IUserLogin) => {
    try {
      const { user: userResponse, token } = await createSession(data);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem('@tsunode-verso:token', token);

      const toNavigate = location.state?.from?.pathname || '/home';

      toast.success('Login realizado com sucesso');
      navigate(toNavigate, { replace: true });
    } catch (error) {
      if (error instanceof axios.AxiosError && error.response?.status === 401) {
        toast.error('Usuário ou senha incorretos');

        return;
      }

      toast.error('Erro Interno');
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
