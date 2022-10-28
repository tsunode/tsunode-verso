import styled from 'styled-components';
import { FieldsetStyled } from './Fieldset';

interface IFormProps {
  step: number;
}

export const FormStep = styled.form<IFormProps>`
  ${FieldsetStyled}

  --selected-item: ${({ step }) => step - 1};
  --total-items: 2;

  max-width: 400px;

  fieldset {
    overflow: hidden;
    margin: 2.5rem auto;

    legend {
      text-align: center;
      width: 100%;
      margin-top: 32px;
    }

    > div.steps-container {
      margin: 1rem 0;

      position: relative;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      left: calc(var(--selected-item) * -100%);
      width: calc(var(--total-items) * 100%);
      transition: left 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      div {
        padding: 0 32px;
        margin-right: 30px;
      }
    }
  }
`;
