import styled from 'styled-components';
import { FieldsetStyled } from './Fieldset';

export const Form = styled.form`
  ${FieldsetStyled}

  fieldset {
    padding: 32px 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
