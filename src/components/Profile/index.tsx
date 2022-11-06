import { Container } from './styles';
import profile from '../../assets/profile.webp';

interface IProfileProps {
  img: string | null;
  size: number;
}

export const Profile = ({ size, img }: IProfileProps) => (
  <Container size={size}>
    <img src={img || profile} alt='Foto do Tsunode' />
  </Container>
);
