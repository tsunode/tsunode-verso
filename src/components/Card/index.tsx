import { useRef, useState } from 'react';
import { GRID_SECTION_ROW_SIZE } from '../../pages/dashboard/styles';
import { IProject } from '../../services/projectsService';
import { Profile } from '../Profile';
import { Container } from './styles';

export const Card = ({ thumbUrl, title, description, user }: IProject) => {
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
        <img onLoad={getImageSize} ref={imageRef} src={thumbUrl} alt={title} />
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div>
          <Profile img={user.avatarUrl} size={35} />
          <span>
            {user.name} {user.surname}
          </span>
        </div>
      </div>
    </Container>
  );
};
