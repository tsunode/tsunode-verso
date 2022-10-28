import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  children?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, type = 'text', id, children, ...rest }, ref) => (
    <Container>
      <div>
        <input id={id} placeholder=' ' type={type} ref={ref} {...rest} />
        <label htmlFor={id}>{label}</label>
        {children}
      </div>
      {error && <p>{error}</p>}
    </Container>
  )
);
