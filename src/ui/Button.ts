import { Link as LinkRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'inline' | 'icon';

interface IButtonProps {
  variant: Variant;
  width?: string;
}

const ButtonStyled = {
  primary: css`
    background: var(--color-primary);
    width: 100%;
    min-height: 48px;

    color: #000;
    font-weight: 500;

    border-radius: 6px;
    padding: 0 15px;
  `,
  inline: css`
    background: none;
    color: var(--color-text);
    text-decoration: underline;
  `,
  icon: css`
    width: 50px;
    height: 50px;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    color: var(--color-text);
    font-size: 20px;
  `,
};

export const Button = styled.button<IButtonProps>`
  ${({ variant }) => ButtonStyled[variant]}

  border: none;
  width: ${({ width }) => width || '100%'};
  min-height: 48px;
`;

export const Link = styled(LinkRouter)<IButtonProps>`
  ${({ variant }) => ButtonStyled[variant]}

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  text-decoration: none;
  width: ${({ width }) => width || '100%'};
  margin: auto;
`;
