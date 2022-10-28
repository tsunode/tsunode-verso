import { FiSearch } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Container } from './styles';

import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { Profile } from '../Profile';
import { Button } from '../../ui/Button';

export const Header = () => {
  const { register } = useForm<{ project: string }>();

  return (
    <Container>
      <img src={logoTsunodeVerso} alt='Logo Tsunode Verso' />

      {/* @todo colocar no form */}
      <form>
        <Input
          label='Procurar por projetos...'
          id='project'
          {...register('project')}
        >
          <FiSearch />
        </Input>
      </form>

      <div>
        <Button variant='primary'>Novo projeto</Button>
        <Profile size={60} />
      </div>
    </Container>
  );
};
