import styled from 'styled-components';

export const Container = styled.header`
  max-height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1001;

  background: linear-gradient(
    250deg,
    var(--color-secondary) -12%,
    var(--color-tertiary) 114%
  );
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.16);

  padding: 24px 18px 20px 18px;

  img:nth-of-type(1) {
    max-height: 60px;
  }

  form:nth-of-type(1) {
    width: 45%;
  }

  > div:nth-last-of-type(1) {
    display: flex;
    align-items: center;

    figure {
      margin-left: 16px;
    }
  }
`;
