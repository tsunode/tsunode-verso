import { Container } from './styles';
import perfil from '../../assets/perfil.jpg';

interface IProfileProps {
  size: number;
}

export const Profile = ({ size }: IProfileProps) => (
  <Container size={size}>
    <img src={perfil} alt='Foto do Tsunode' />
  </Container>
);
