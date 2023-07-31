import { colors } from '@styles/colors';
import * as S from './styles';
import React, { useEffect } from 'react';

type PageWrapperProps = {
  children: React.ReactNode;
  width?: number;
  minWidth?: number;
  bgColor?: string;
};
export default function PageWrapper({
  children,
  width = 1024,
  minWidth = 640,
  bgColor = colors.navy_30,
}: PageWrapperProps) {
  useEffect(() => {
    document.documentElement.style.setProperty('--page-bg-color', bgColor);
  }, [bgColor]);
  return (
    <S.PageWrapperContainer>
      <S.CenterPosition width={width} minWidth={minWidth}>
        {children}
      </S.CenterPosition>
    </S.PageWrapperContainer>
  );
}
