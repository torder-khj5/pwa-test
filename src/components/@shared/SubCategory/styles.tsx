import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const SubCategoryContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  color: ${colors.green_key};
`;

export const SubCategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;
  height: 40px;

  padding-right: 20px;
  cursor: pointer;
`;
