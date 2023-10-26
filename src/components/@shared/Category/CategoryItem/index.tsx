import * as S from './styles.tsx';
import React from 'react';

interface CategoryItemProps {
  code: string;
  itemName: string;
  active: boolean;
  onItemClick: (itemCode: string) => void;
}

export const CategoryItem = ({ code, itemName, active, onItemClick }: CategoryItemProps) => {
  return (
    <S.CategoryItemWrapper isActive={active} onClick={() => onItemClick(code)}>
      {code + ' ' + itemName}
    </S.CategoryItemWrapper>
  );
};

export default CategoryItem;
