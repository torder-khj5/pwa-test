import styled from '@emotion/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'nav header'
    'nav children';
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
`;

export const ChildWrapper = styled.main`
  grid-area: children;
  overflow-y: auto;
  background-color: var(--page-bg-color);
`;
