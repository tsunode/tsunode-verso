import styled from 'styled-components';

interface IStepsProps {
  step: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Steps = styled.div<IStepsProps>`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    width: 12px;
    height: 12px;
    background-color: #fff;
    margin: 5px;
    border-radius: 50%;
  }

  div:nth-child(${({ step }) => step}) {
    background-color: var(--color-primary);
  }
`;
