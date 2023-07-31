import Icon from '@components/@shared/Icon';
import * as S from './styles';
import React, { useState } from 'react';

type SearchInputProps = {
  onSearch?: (text: string) => void;
  placeholder?: string;
};
export default function SearchInput({ onSearch, placeholder = '검색어를 입력해주세요.' }: SearchInputProps) {
  const [text, setText] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <S.Container>
      <S.StyledInput placeholder={placeholder} value={text} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
      <Icon name="검색" size={16} />
    </S.Container>
  );
}
