import styled from 'styled-components';

export const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;

  position: relative;

  padding: 15px;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;

  transition: all 0.3s ease-out;

  label {
    display: flex;
    align-items: center;
    height: 100%;

    position: absolute;
    top: 0;
    left: 12px;

    transition: all 0.3s ease-out;
  }

  & input:focus + label,
  & input:not(:placeholder-shown) + label {
    top: -35px;
    left: 5px;
  }

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

  & + & {
    margin-top: 30px;
  }
`;
