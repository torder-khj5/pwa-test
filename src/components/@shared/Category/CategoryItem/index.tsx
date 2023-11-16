import * as S from './styles.tsx';
import React from 'react';

interface CategoryItemProps {
  code: string;
  itemName: string;
  isSelect: boolean;
  onItemClick: (itemCode: string) => void;
}

export const CategoryItem = ({ code, itemName, isSelect, onItemClick }: CategoryItemProps) => {
  return (
    <S.CategoryItemWrapper isSelect={isSelect} onClick={() => onItemClick(code)}>
      {code + ' ' + itemName}
    </S.CategoryItemWrapper>
  );
};

export default CategoryItem;
