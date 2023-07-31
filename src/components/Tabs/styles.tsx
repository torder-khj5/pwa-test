import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TabsContainer = styled.div`
  width: 460px;
`;

export const TabHeader = styled.div`
  width: 460px;
  height: 60px;
  margin-bottom: 20px;
  background-color: #f0f2f6;
`;

export const TabButton = styled.button<{ active?: boolean }>`
  width: 221px;
  height: 48px;
  margin: 6px 0 6px 6px;
  background-color: #f0f2f6;

  ${({ active }) => active && activeStyle};
`;

const activeStyle = css`
  flex-shrink: 0;

  width: 221px;
  height: 48px;

  font-weight: bold;
  background: #fff;

  border-radius: 6px;
  box-shadow: 3px 3px 10px 0 rgb(48 54 68 / 15%);
`;

export const TabPanel = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: max-content;

  ${({ active }) =>
    active &&
    css`
      visibility: visible;
    `};
`;
