import styled, { css } from 'styled-components';

interface IContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-width: 200px;
  min-height: 200px;

  background: rgba(255, 255, 255, 0.01);
  border: 1px dashed #524159;
  border-radius: 10px;
  margin: auto;

  font-size: 35px;

  ${({ isDragging }) =>
    isDragging &&
    css`
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
    `}

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }

  &:hover {
    border-color: var(--color-primary);
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* width: 100%;
    height: 100%;
    min-width: 200px;
    min-height: 200px; */
    z-index: 1;
  }

  img {
    max-width: 80%;
    max-height: 80%;
  }

  margin: 30px 0;
`;
