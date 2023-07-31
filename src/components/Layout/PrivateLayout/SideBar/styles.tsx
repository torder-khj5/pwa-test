import { roundCircle } from '@styles/mixin';
import { colors } from '@styles/colors';
import StyleResetButton from '@components/@shared/StyleResetButton';
import styled from '@emotion/styled';

export const SideBarContainer = styled.aside<{ width: number }>`
  position: relative;
  grid-area: nav;
  width: ${({ width }) => width}px;
  color: ${colors.white_100};
  background-color: ${colors.navy_900};
  transition: width 0.5s;

  a {
    color: ${colors.white_100};
    text-decoration: none;
    outline: none;
  }
`;

export const SideTop = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  padding-right: 20px;

  .logo {
    width: 82px;
    height: 22px;
    background-color: white;
  }
`;

export const SideNav = styled.nav`
  padding: 0 10px;
`;

export const ExpandButton = styled(StyleResetButton)`
  position: absolute;
  top: 21px;
  right: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${colors.white_100};
  border: 1px solid ${colors.line};

  ${roundCircle}
`;

export const MainCategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 8px;
  white-space: nowrap;
  border-radius: 10px;

  &:hover {
    background-color: #3d4352;
  }

  .main-category-left {
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const SubCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubCategoryWrap = styled.li`
  a {
    display: block;
    padding: 12px 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.8px;
    border-radius: 5px;

    &:hover {
      background-color: #3d4352;
    }
  }

  .active {
    background-color: ${colors.red_500};
  }
`;
