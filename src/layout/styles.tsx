import { colors } from '@styles/colors';
import styled from '@emotion/styled';

export const GridContainer = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.white};
`;

export const ChildWrapper = styled.main`
  position: relative;
  top: 50px;
  display: flex;
  width: 100%;

  background-color: ${colors.white};
`;
