import { Header } from '../../components/Header';
import teste1 from '../../assets/teste1.jpg';
import teste2 from '../../assets/teste2.jpg';
import teste3 from '../../assets/teste3.jpg';
import { Card } from '../../components/Card';
import { Section } from './styles';
import { Main } from '../../ui/Main';

export const Dashboard = () => {
  console.log('te');

  return (
    <main>
      <Header />

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
