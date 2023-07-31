import styled from '@emotion/styled';

export const PageWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 16px;
`;

// TODO: will fix min-width
export const CenterPosition = styled.div<{ width: number; minWidth: number }>`
  width: ${({ width }) => width + 'px'};

  /* min-width: ${({ minWidth }) => minWidth + 'px'}; */
`;
