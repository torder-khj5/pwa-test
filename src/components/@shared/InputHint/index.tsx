import * as S from './styles';
import React from 'react';

interface InputHintProps {
  isShow: boolean;
  message: string | null;
}

export default function InputHint({ isShow, message }: InputHintProps) {
  return isShow ? <S.Paragraph>{message}</S.Paragraph> : null;
}
