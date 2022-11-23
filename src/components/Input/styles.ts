import styled from 'styled-components';

export const Container = styled.div`
  div {
    height: 48px;
    display: flex;
    align-items: center;

    position: relative;

    padding: 0 15px;

    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;

    transition: all 0.3s ease-out;

    &:focus-within {
      border: 1px solid var(--color-primary);
    }

    label {
      display: flex;
      align-items: center;
      height: 100%;

      position: absolute;
      top: 0;
      left: 12px;

      transition: top 0.5s, left 0.3s ease-out;
    }

    & input:is(:focus, :not(:placeholder-shown)) + label {
      top: -13px;
      left: 10px;
      background-color: var(--color-primary);
      color: #000;
      padding: 3px 9px;
      border-radius: 5px;
      height: fit-content;
      font-size: 13px;
    }

    /* & input:focus + label,
    & input:not(:placeholder-shown) + label {
      top: -13px;
      left: 10px;
      background-color: var(--color-primary);
      color: #000;
      padding: 3px 9px;
      border-radius: 5px;
      height: fit-content;
      font-size: 13px;
    } */

    input {
      background: none;
      width: 100%;
      height: 100%;
      padding: 5px;
      color: var(--color-primary);
      border: none;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  p {
    margin-top: 2px;
    text-align: left;
    color: var(--color-error);
  }

  & + & {
    margin-top: 32px;
  }
`;
