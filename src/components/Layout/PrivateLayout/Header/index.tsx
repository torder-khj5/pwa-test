import { useAuthAction } from '@store/useAuthStore';
import Icon from '@components/@shared/Icon';
import * as S from './styles';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const { signOut } = useAuthAction();

  return (
    <S.Header>
      <S.NavUl aria-label="main-nav">
        <li>
          <NavLink to="/notice">공지사항</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      </S.NavUl>
      <S.ToolsUl>
        <li>
          <S.ToolIconWrap>
            <Icon name="검색" size={30} />
          </S.ToolIconWrap>
        </li>
        <li>
          <S.ToolIconWrap>
            <Icon name="알림" size={30} />
            <S.NotificationBadge />
          </S.ToolIconWrap>
        </li>
      </S.ToolsUl>
      <S.UserButton onClick={signOut}>
        <img src="https://i.pravatar.cc/36" alt="user-avatar" />
        <span>홍길동</span>
      </S.UserButton>
    </S.Header>
  );
}
