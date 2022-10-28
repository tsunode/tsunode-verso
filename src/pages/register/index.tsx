import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Input } from '../../components/Input';

import { Main } from '../../ui/Main';
import { Button } from '../../ui/Button';
import { schema } from './validations';

import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { FormStep } from '../../ui/Forms';
import { Steps } from './styles';

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
  const { handleSubmit, register } = useForm<IRegisterData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  function login(data: IRegisterData) {
    console.log(data);

    navigate('/');
  }

  return (
    <Main>
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
              <Input label='Nome' id='name' {...register('name')} />
              <Input label='Sobrenome' id='surname' {...register('surname')} />
              <Input label='Título' id='title' {...register('title')} />

              <Button
                type='button'
                variant='primary'
                onClick={() => setStep(step + 1)}
              >
                Próximo
              </Button>
            </div>

            <div>
              <Input label='E-mail' id='email' {...register('email')} />
              <Input label='Senha' id='password' {...register('password')} />
              <Input
                label='Confirmar senha'
                id='confirmPassword'
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
    </Main>
  );
};
