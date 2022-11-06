import { Main } from './styles';

import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { Link } from '../../ui/Button';
import { useAuth } from '../../providers/authContext';

export const NotFound = () => {
  const { user } = useAuth();

  const toNavigate = user ? '/home' : '/';

  return (
    <Main>
      <img src={logoTsunodeVerso} alt='Logo Tsunode Verso' />
      <h1>Página não encontrada</h1>
      <h2>404</h2>
      <Link to={toNavigate} variant='primary' width='auto'>
        {user ? 'Voltar para Home' : 'Ir para Login'}
      </Link>
    </Main>
  );
};
