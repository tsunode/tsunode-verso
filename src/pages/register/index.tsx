import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { useState } from 'react';
import { Input } from '../../components/Input';

import { Main } from '../../ui/Main';
import { Button, Link } from '../../ui/Button';
import { schema } from './validations';

import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { FormStep } from '../../ui/Forms';
import { Container, Steps } from './styles';

interface IRegisterData {
  name: string;
  surname: string;
  title: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterData>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  function login(data: IRegisterData) {
    console.log(data);

    navigate('/');
  }

  return (
    <Main>
      <Link variant='icon' to='/'>
        <AiOutlineArrowLeft />
      </Link>

      <Container>
        <img src={logoTsunodeVerso} alt='Logo Tsunode Verso' />

        <FormStep step={step} onSubmit={handleSubmit(login)}>
          <fieldset>
            <legend>Fazer cadastro:</legend>

            <Steps step={step}>
              <div />
              <div />
            </Steps>

            <p>Preencha os seus dados pessoais</p>

            <div className='steps-container'>
              <div>
                <Input
                  label='Nome'
                  id='name'
                  error={errors.name?.message}
                  {...register('name')}
                />
                <Input
                  label='Sobrenome'
                  id='surname'
                  error={errors.surname?.message}
                  {...register('surname')}
                />
                <Input
                  label='Título (opcional)'
                  id='title'
                  error={errors.title?.message}
                  {...register('title')}
                />

                <Button
                  type='button'
                  variant='primary'
                  onClick={() => setStep(step + 1)}
                >
                  Próximo
                </Button>
              </div>

              <div>
                <Input
                  label='E-mail'
                  id='email'
                  error={errors.email?.message}
                  {...register('email')}
                />
                <Input
                  label='Senha'
                  id='password'
                  type='password'
                  error={errors.password?.message}
                  {...register('password')}
                />
                <Input
                  label='Confirmar senha'
                  id='confirmPassword'
                  type='password'
                  error={errors.confirmPassword?.message}
                  {...register('confirmPassword')}
                />

                <Button type='submit' variant='primary'>
                  Concluir
                </Button>
                <Button
                  type='button'
                  variant='inline'
                  onClick={() => setStep(step - 1)}
                >
                  Voltar
                </Button>
              </div>
            </div>
          </fieldset>
        </FormStep>
      </Container>
    </Main>
  );
};
