import { colors } from '@styles/colors';
import styled from '@emotion/styled';

export const GridContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
`;

export const ChildWrapper = styled.main`
  margin: 30px;
  overflow-y: scroll;
  background-color: ${colors.white};
  border-radius: 20px;
`;
