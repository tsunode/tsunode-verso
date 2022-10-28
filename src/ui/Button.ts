import styled, { css } from 'styled-components';

type Variant = 'primary' | 'inline';

interface IButtonProps {
  variant: Variant;
}

const ButtonStyled = {
  primary: css`
    background: #3ec863;
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
