import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { HiKey } from 'react-icons/hi';

import { Input } from '../../components/Input';

import { Main } from '../../ui/Main';
import { Button } from '../../ui/Button';
import { schema } from './validations';

import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { Form } from '../../ui/Forms';
import { useAuth } from '../../providers/authContext';
import { IUserLogin } from '../../services/sessionsService';

export const Login = () => {
  const { signIn } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <img src={logoTsunodeVerso} alt='Logo Tsunode Verso' />

      <Form onSubmit={handleSubmit(signIn)}>
        <fieldset>
          <legend>Faça seu login:</legend>
          <Input
            label='E-mail'
            id='email'
            type='email'
            error={errors.email?.message}
            {...register('email')}
          >
            <MdEmail />
          </Input>
          <Input
            label='Senha'
            id='password'
            type='password'
            error={errors.password?.message}
            {...register('password')}
          >
            <HiKey />
          </Input>

          <Button variant='primary'>Entrar</Button>
          <Link to='/signup'>Não é cadastrado ainda? Clique aqui</Link>
        </fieldset>
      </Form>
    </Main>
  );
};
