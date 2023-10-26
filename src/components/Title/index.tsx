import * as S from './styles';
import { type ReactNode } from 'react';

type TitleProps = {
  title: string;
  subTitle?: string;
  rightButton?: ReactNode;
};

const Title = ({ title, subTitle, rightButton }: TitleProps) => {
  return (
    <S.TitleContainer isVisibleRightButton={!!rightButton}>
      <S.Title>{title}</S.Title>
      {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
      {rightButton && <S.RightButtonGroup>{rightButton}</S.RightButtonGroup>}
    </S.TitleContainer>
  );
};

export default Title;
