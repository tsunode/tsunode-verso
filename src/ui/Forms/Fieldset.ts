import { css } from 'styled-components';

export const FieldsetStyled = css`
  fieldset {
    position: relative;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    > p {
      text-align: center;
      margin-bottom: 32px;
    }
    legend {
      font-size: 20px;
      float: left;
      margin-bottom: 20px;
    }
  }

  div {
    width: 100%;
  }

  button {
    margin-top: 15px;
  }

  a {
    margin-top: 20px;
    color: #fff;
  }
`;
