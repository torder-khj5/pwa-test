import { roundCircle } from '@styles/mixin';
import styled from '@emotion/styled';

type SwitchWrapProps = {
  justifyContent: 'flex-end' | 'flex-start';
  backgroundColor: string;
};
export const SwitchWrap = styled.div<SwitchWrapProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 38px;
  padding: 2px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: all 0.3s;

  ${roundCircle}
`;

export const SwitchButton = styled.div`
  width: 16px;
  height: 16px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 30%);

  ${roundCircle}
`;
