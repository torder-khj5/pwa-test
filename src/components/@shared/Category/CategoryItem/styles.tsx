import { palette } from '@styles/colors_v2.ts';
import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const CategoryItemWrapper = styled.div<{ isSelect: boolean }>`
  padding: 30px;
  font-size: 20px;
  color: ${palette.gray_20};
  cursor: pointer;
  background-color: ${(props) => (props.isSelect ? '#007bff' : 'transparent')};

  ${(props) =>
    props.isSelect &&
    `
    font-size: 24px;
    font-weight: 600;
    background-color: ${colors.white};
    color: ${colors.green_key};
  `}
`;
