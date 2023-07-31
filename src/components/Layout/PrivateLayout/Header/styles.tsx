import { roundCircle } from '@styles/mixin';
import StyleResetButton from '@components/@shared/StyleResetButton';
import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  padding-right: 63px;
  border-bottom: 1px solid #e1e1e1;
`;

const FlexHorizontalUl = styled.ul`
  display: flex;

  a {
    color: #000;
    text-decoration: none;
    outline: none;
  }

  a:hover {
    color: #fff;
    text-decoration: none;
    background-color: #f59000;
  }
`;

export const NavUl = styled(FlexHorizontalUl)`
  gap: 47px;
  margin-right: 44px;
`;
export const ToolsUl = styled(FlexHorizontalUl)`
  gap: 15px;
  margin-right: 27px;
  overflow: visible;
`;
export const ToolIconWrap = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    vertical-align: middle;
  }
`;
export const NotificationBadge = styled.span`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 6px;
  height: 6px;
  background-color: #ff4343;
  ${roundCircle}
`;

export const UserButton = styled(StyleResetButton)`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    ${roundCircle}
  }
`;
