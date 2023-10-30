import { type ChildCategoryType } from '@type/categoryType.ts';
import { useCategorySelector } from '@store/useCategoryStore.ts';
import * as S from './styles.tsx';

export default function SubCategory() {
  const { currentSubCategory } = useCategorySelector(['currentSubCategory']);
  console.log('currentSubCategory: ', currentSubCategory);

  return (
    <S.SubCategoryContainer>
      {currentSubCategory.map(({ name, id }: ChildCategoryType) => {
        return <S.SubCategoryItem key={id}>{name}</S.SubCategoryItem>;
      })}
    </S.SubCategoryContainer>
  );
}
