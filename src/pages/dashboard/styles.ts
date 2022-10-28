import styled from 'styled-components';

export const GRID_SECTION_ROW_SIZE = 15;

export const Section = styled.section`
  column-width: 245px;
  column-gap: 2px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 245px);
  grid-auto-rows: ${GRID_SECTION_ROW_SIZE}px;
  justify-content: center;
`;
