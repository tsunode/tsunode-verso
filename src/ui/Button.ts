import { Link as LinkRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'inline';

interface IButtonProps {
  variant: Variant;
}

const ButtonStyled = {
  primary: css`
    background: var(--color-primary);
    border-radius: 6px;
    padding: 0 15px;
  `,
  inline: css`
    background: none;
    color: var(--color-text);
    text-decoration: underline;
  `,
};

export const Button = styled.button<IButtonProps>`
  ${({ variant }) => ButtonStyled[variant]}

  width: 100%;
  min-height: 48px;

  border: none;

  font-weight: 500;
`;

export const Link = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  width: 50px;
  height: 50px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  font-size: 20px;
  color: var(--color-text);
`;
