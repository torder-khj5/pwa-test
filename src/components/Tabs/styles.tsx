import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabHeader = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 25px;
  color: ${colors.blue_900};
  background-color: ${colors.gray_50};
  border-radius: 10px;
`;

export const TabButton = styled.button<{ active?: boolean; isFirst?: boolean }>`
  flex-shrink: 0;
  width: 221px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black_900};
  text-align: center;
  letter-spacing: -0.8px;
  border-radius: 6px;

  ${({ active, isFirst }) => active && activeStyle(isFirst)};
`;

const activeStyle = (isFirst?: boolean) => css`
  width: 221px;
  height: 48px;
  margin: 6px ${isFirst ? '0' : '6px'} 6px 6px;

  font-weight: bold;
  background: ${colors.white};

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
