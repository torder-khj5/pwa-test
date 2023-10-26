import Sidebar from '@components/@shared/Sidebar';
import { Header } from '@components/@shared/Header';
import * as S from './styles';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <S.GridContainer>
      <Sidebar />
      <Header />
      <S.ChildWrapper>
        <Outlet />
      </S.ChildWrapper>
    </S.GridContainer>
  );
}
