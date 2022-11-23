import { FiSearch } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Section } from './styles';
import { Button, Link } from '../../ui/Button';
import { Input } from '../../components/Input';
import { InfiniteScroll } from '../../components/InfiniteScroll';
import { useProject } from '../../providers/projectContext';

import teste1 from '../../assets/teste1.jpg';
import teste2 from '../../assets/teste2.jpg';
import teste3 from '../../assets/teste3.jpg';

export const Dashboard = () => {
  const { register, handleSubmit } = useForm<{ project: string }>();
  const { projects, setProjectPage, handleFilterProject } = useProject();

  return (
    <main>
      <Header>
        <form onSubmit={handleSubmit(handleFilterProject)}>
          <Input
            label='Procurar por projetos...'
            id='project'
            {...register('project')}
          >
            <Button variant='inline' width='auto'>
              <FiSearch />
            </Button>
          </Input>
        </form>

        <Link to='/new-project' variant='primary'>
          Novo projeto
        </Link>
      </Header>

      <Section>
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}

        {/* <Card {...projects[0]} thumbUrl={teste1} />
        <Card {...projects[0]} thumbUrl={teste2} />
        <Card {...projects[0]} thumbUrl={teste3} />
        <Card {...projects[0]} thumbUrl={teste1} />
        <Card {...projects[0]} thumbUrl={teste2} />
        <Card {...projects[0]} thumbUrl={teste3} />
        <Card {...projects[0]} thumbUrl={teste1} />
        <Card {...projects[0]} thumbUrl={teste2} />
        <Card {...projects[0]} thumbUrl={teste3} /> */}

        <InfiniteScroll callback={() => setProjectPage(1)} />
      </Section>
    </main>
  );
};
