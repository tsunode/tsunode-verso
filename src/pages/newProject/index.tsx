import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { InputFile } from '../../components/InputFile';
import { Button, Link } from '../../ui/Button';
import { Form } from '../../ui/Forms';

import { Section } from './styles';

interface ICreateProject {
  thumb: File[];
  title: string;
  link: string;
  adtionalLink: string;
  email: string;
}

export const NewProject = () => {
  const { register, handleSubmit, watch } = useForm<ICreateProject>();

  function createProject(data: ICreateProject) {
    console.log(data);
  }

  return (
    <main>
      <Header />

      <Section>
        <Link variant='icon' to='/home'>
          <AiOutlineArrowLeft />
        </Link>

        <Form onSubmit={handleSubmit(createProject)}>
          <fieldset>
            <legend>Criar Projeto</legend>

            <InputFile
              label='Thumb'
              id='thumb'
              {...register('thumb')}
              watchFile={watch('thumb')}
            />
            <Input label='Link do projeto' id='link' {...register('link')} />
            <Input
              label='Link adicional (opcional)'
              id='adtionalLink'
              {...register('adtionalLink')}
            />
            <Input label='Título' id='title' {...register('title')} />
            <Input
              label='E-mail'
              type='email'
              id='email'
              {...register('email')}
            />

            <Button variant='primary'>Salvar</Button>
          </fieldset>
        </Form>
      </Section>
    </main>
  );
};
