import { colors } from '@styles/colors.ts';
import Icon from '../@shared/Icon';
import styled from '@emotion/styled';

export const DropBoxWrapper = styled.div`
  margin-top: 10px;
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 0 rgb(48 54 68 / 10%);
`;

export const DropBoxListWrapper = styled.ul`
  box-sizing: border-box;
  height: 200px;
  padding: 5px;
  overflow-y: scroll;
`;

export const DropBoxList = styled.li`
  display: flex;
  flex-shrink: 0;
  gap: 28px;
  align-items: center;
  padding: 20px;

  :hover {
    background-color: #f0f2f6;
    border-radius: 8px;
  }
`;

export const DropBoxSpan = styled.span<{ colors: string }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: ${({ colors }) => colors};
  letter-spacing: -0.8px;
`;

export const IconAdditionalPosition = styled(Icon)`
  margin-left: auto;
`;
