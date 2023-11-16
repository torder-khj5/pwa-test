import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const CategoryItemWrapper = styled.div<{ isSelect: boolean }>`
  padding: 30px;
  font-size: 16px;
  color: ${(props) => (props.isSelect ? '#fff' : '#000')};
  cursor: pointer;
  background-color: ${(props) => (props.isSelect ? '#007bff' : 'transparent')};

  ${(props) =>
    props.isSelect &&
    `
    font-size: 20px;
    background-color: ${colors.white};
    color: ${colors.green_key};
  `}
`;
