import { FiSearch } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Section } from './styles';
import { Button, Link } from '../../ui/Button';
import { Input } from '../../components/Input';
import { InfiniteScroll } from '../../components/InfiniteScroll';
import { useProject } from '../../providers/projectContext';

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

        <InfiniteScroll callback={() => setProjectPage(1)} />
      </Section>
    </main>
  );
};
