import { type CategoryType } from '@type/categoryType.ts';
import { useCategoryAction } from '@store/useCategoryStore.ts';
import { SAMPLE_CATEGORY } from '@constants/category.ts';
import CategoryItem from '@components/@shared/Category/CategoryItem';
import { requestCategories } from '@api/categories.ts';
import * as S from './styles.tsx';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Category() {
  // const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['categories'], requestCategories, {
    retry: 0,
    staleTime: 60 * 5000,
    initialData: () => {
      // return queryClient.getQueryData(['categories']);
      return SAMPLE_CATEGORY;
    },
    networkMode: 'offlineFirst',
  });
  const { setCategory, setCurrentCategory } = useCategoryAction();

  const [selectCode, setSelectCode] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && data && data.data.length > 0 && selectCode === null) {
      setCategory(data.data);
      setSelectCode(data.data[0].code);
      setCurrentCategory(data.data[0].code);
    }
  }, [data, isLoading, selectCode, setCategory, setCurrentCategory]);

  const handleItemClick = (itemCode: string) => {
    setSelectCode(itemCode === selectCode ? null : itemCode);
    setCurrentCategory(itemCode);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <S.CategoryContainer>
      {data?.data.map(({ id, name, code }: CategoryType, index: number) => {
        return (
          <CategoryItem
            key={id + index}
            itemName={name}
            code={code}
            isSelect={code === selectCode}
            onItemClick={handleItemClick}
          />
        );
      })}
    </S.CategoryContainer>
  );
}
