import { type ChildCategoryType } from '@type/categoryType.ts';
import { useCategoryAction, useCategorySelector } from '@store/useCategoryStore.ts';
import { requestSubCategories } from '@api/categories.ts';
import * as S from './styles.tsx';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function SubCategory() {
  const { currentSubCategory, currentCategory } = useCategorySelector(['currentSubCategory', 'currentCategory']);
  // const [selectCode, setSelectCode] = useState<string | null>(null);
  // const { setCurrentSubCategory } = useCategoryAction();
  const queryClient = useQueryClient();
  const { setCategory, setCurrentCategory } = useCategoryAction();

  const { data, isLoading } = useQuery(
    ['subCategories', currentCategory.code],
    async () => await requestSubCategories(currentCategory.code),
    {
      retry: 0,
      staleTime: 60 * 5000,
      initialData: () => {
        return queryClient.getQueryData(['subCategories']);
      },
      networkMode: 'offlineFirst',
    }
  );

  useEffect(() => {
    if (!isLoading && data) {
      // setCurrentSubCategory();
    }

    console.log('data: ', data);
  }, [data, isLoading, setCategory, setCurrentCategory]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <S.SubCategoryContainer>
      {currentSubCategory?.map(({ name, id }: ChildCategoryType) => {
        return <S.SubCategoryItem key={id}>{name}</S.SubCategoryItem>;
      })}
    </S.SubCategoryContainer>
  );
}
