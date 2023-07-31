import * as S from './styles';
import SideBar from './SideBar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  return (
    <S.GridContainer>
      <Header />
      <SideBar />
      <S.ChildWrapper>
        <Outlet />
      </S.ChildWrapper>
    </S.GridContainer>
  );
}
