import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, children = null, type = 'text', id, ...rest }, ref) => (
    <Container>
      <input id={id} placeholder=' ' type={type} ref={ref} {...rest} />
      <label htmlFor={id}>{label}</label>
      {children}
    </Container>
  )
);
