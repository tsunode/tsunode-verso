import { useEffect, useRef, useState } from 'react';
import { GRID_SECTION_ROW_SIZE } from '../../pages/dashboard/styles';
import { Profile } from '../Profile';
import { Container } from './styles';

interface ICardProps {
  image: string;
}

export const Card = ({ image }: ICardProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSize, setImageSize] = useState(0);

  function getImageSize() {
    if (!imageRef.current) {
      return;
    }

    const { height } = imageRef.current;

    const GRID_CONTENT_SPAN_SIZE = 6;
    const size = Math.round(
      height / GRID_SECTION_ROW_SIZE + GRID_CONTENT_SPAN_SIZE
    );

    setImageSize(size);
  }

  return (
    <Container size={imageSize}>
      <div>
        <img onLoad={getImageSize} ref={imageRef} src={image} alt='' />
        <div>
          <p>Banco de dados do sistema financeiro do Banco do Brasil</p>
          <p>
            Foi proposto para o nosso time fazer um sistema que integra o Banbco
            com uma série de feerramentas internas junto à uma API de dados do
            Banco do Brasil. um sistema que integra o Banbco com uma série de
            feerramentas internas junto à uma API de dados do Banco do Brasil
          </p>
        </div>
      </div>
      <div>
        <div>
          <Profile size={35} />
          <span>Mario Dias</span>
        </div>
        <span>12k views</span>
      </div>
    </Container>
  );
};
