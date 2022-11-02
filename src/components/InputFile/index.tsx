import {
  useEffect,
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { AiTwotoneCamera } from 'react-icons/ai';

import { Container } from './styles';

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
  watchFile: File[];
  children?: ReactNode;
}

export const InputFile = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, watchFile, error, id, ...rest }, ref) => {
    const [previewImage, setPreviewImage] = useState<string>();
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
      if (watchFile) {
        setPreviewImage(URL.createObjectURL(watchFile[0]));
        setIsDragging(false);
      }
    }, [watchFile]);

    return (
      <Container
        onDragOver={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        isDragging={isDragging}
      >
        <input id={id} type='file' ref={ref} multiple={false} {...rest} />
        {!previewImage ? (
          <>
            <label htmlFor={id}>
              <AiTwotoneCamera />
              {label}
            </label>
            <p>Clique aqui ou arraste uma imagem</p>
          </>
        ) : (
          <img src={previewImage} alt='' />
        )}
      </Container>
    );
  }
);
