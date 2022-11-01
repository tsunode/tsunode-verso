import { FiSearch } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';
import teste1 from '../../assets/teste1.jpg';
import teste2 from '../../assets/teste2.jpg';
import teste3 from '../../assets/teste3.jpg';
import { Card } from '../../components/Card';
import { Section } from './styles';
import { Link } from '../../ui/Button';
import { Input } from '../../components/Input';

export const Dashboard = () => {
  const { register } = useForm<{ project: string }>();

  return (
    <main>
      <Header>
        <form>
          <Input
            label='Procurar por projetos...'
            id='project'
            {...register('project')}
          >
            <FiSearch />
          </Input>
        </form>

        <Link to='/new-project' variant='primary'>
          Novo projeto
        </Link>
      </Header>

      <Section>
        <Card image={teste2} />
        <Card image={teste2} />
        <Card image={teste2} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste1} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste3} />
        <Card image={teste3} />
        <Card image={teste3} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
        <Card image={teste2} />
        <Card image={teste1} />
      </Section>
    </main>
  );
};
