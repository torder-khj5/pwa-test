import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const CategoryItemWrapper = styled.div<{ isActive: boolean }>`
  padding: 30px;
  font-size: 16px;
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#007bff' : 'transparent')};

  ${(props) =>
    props.isActive &&
    `
    font-size: 20px;
    background-color: ${colors.white};
    color: ${colors.green_key};
  `}
`;
