import { palette } from '@styles/colors_v2';
import styled from '@emotion/styled';

export const ModalContentWrapper = styled.div`
  display: inline-block;
  padding: 24px;
  background-color: ${palette.white};
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-l);
`;

export const ModalBgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2026324d;
`;
