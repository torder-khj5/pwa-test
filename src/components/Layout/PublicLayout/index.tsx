import * as S from './styles';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function PublicLayout() {
  return (
    <S.Container>
      <Header />
      <S.ChildWrapper>
        <Outlet />
      </S.ChildWrapper>
    </S.Container>
  );
}
