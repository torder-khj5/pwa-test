import styled from '@emotion/styled';

export const TooltipMessageWrap = styled.div<{ bgColor: string; color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${({ color }) => color};
  text-align: center;
  letter-spacing: -0.7px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;
  box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 10%), -1px -1px 5px 0 rgb(0 0 0 / 8%);
`;
