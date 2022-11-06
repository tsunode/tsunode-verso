import styled from 'styled-components';

interface IContainerProps {
  size: number;
}

export const Container = styled.a<IContainerProps>`
  grid-row-end: span ${({ size }) => size};
  width: 230px;
  margin: 15px 10px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.11) -6%,
    rgba(255, 255, 255, 0) 115%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);

  padding: 8px;
  border-radius: 16px;
  height: fit-content;

  text-decoration: none;
  color: #fff;

  > div:nth-of-type(1) {
    position: relative;

    > div {
      padding: 16px 12px;
      bottom: 0;
      position: absolute;

      p:nth-of-type(2) {
        display: none;
      }
    }

    > img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }

    ::before {
      content: '';
      position: absolute;
      background: linear-gradient(
        180.81deg,
        rgba(31, 31, 31, 0.05) -32.08%,
        rgba(0, 0, 0, 0.96) 92.56%
      );
      height: 100%;
      width: 100%;
      border-radius: 16px;
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;

    span {
      font-family: 'Inter';
      font-size: 13px;
      margin-left: 4px;
    }

    div {
      display: flex;
      align-items: center;
    }
  }
`;
