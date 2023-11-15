import { colors } from '@styles/colors.ts';
import styled from '@emotion/styled';

export const SidebarContainer = styled.aside`
  width: 21rem;
  max-width: 21rem;
  height: 100%;
  background-color: ${colors.green_key};
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
`;

export const HeaderTableName = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 94px;
  height: 47px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1px;
  color: ${colors.gray_100};
  border: solid 2px rgb(255 255 255 / 60%);
  border-radius: 15px;
`;
