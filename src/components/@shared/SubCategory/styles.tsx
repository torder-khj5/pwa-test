import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const SubCategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 20px;
  color: ${colors.green_key};
`;

export const SubCategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  padding-right: 20px;
  text-underline: lightgray;
`;
