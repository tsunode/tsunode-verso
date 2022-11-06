import { ReactNode, Children } from 'react';

import { Profile } from '../Profile';
import { Container } from './styles';
import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { useAuth } from '../../providers/authContext';

interface IHeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  const { user } = useAuth();
  const [FormSearch, LinkNewProject] = Children.toArray(children);

  return (
    <Container>
      <img src={logoTsunodeVerso} alt='Logo Tsunode Verso' />

      {FormSearch}

      <div>
        {LinkNewProject}
        <Profile img={user?.avatarUrl || null} size={60} />
      </div>
    </Container>
  );
};
