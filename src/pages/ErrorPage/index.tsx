import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <S.PageWrapper>
      <S.Header>⚠ Error</S.Header>
      <S.Paragraph>
        오류가 발생하였습니다. <br />
        이용에 불편을 드려 죄송합니다. <br />
        잠시 후 다시 시도해 주세요.
      </S.Paragraph>
      <S.ButtonSection>
        <S.Button onClick={() => navigate(-1)}>이전 페이지로 가기</S.Button>
        <S.Button onClick={() => navigate('/')}>메인으로 가기</S.Button>
      </S.ButtonSection>
    </S.PageWrapper>
  );
}
