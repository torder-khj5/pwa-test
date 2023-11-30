import { palette } from '@styles/colors_v2';
import { type ToastType } from '.';
import styled from '@emotion/styled';

export const CustomToastLayout = styled.div<{ type: ToastType; visible: boolean }>`
  z-index: 999;
  display: inline-flex;
  gap: var(--spacing-3, 10px);
  align-items: center;
  padding: var(--spacing-5, 14px) var(--spacing-6, 20px);
  color: ${({ type }) => (type === 'dark' ? palette.gray_10 : palette.gray_800)};
  letter-spacing: -0.255px;
  background: ${({ type }) => (type === 'dark' ? palette.gray_600 : palette.white)};
  border-radius: var(--border-radius-l, 16px);
  box-shadow: var(--shadow-l);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 200ms ease-in-out;
`;
