import { type ChildCategoryType, type ProductType } from '@type/categoryType.ts';
import ImageCard from '@pages/HomePage/ImageCard';
import { requestSubCategories } from '@api/categories.ts';
import * as S from './styles.tsx';
import { Container } from './styles.tsx';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

type Img = {
  src: string;
  name: string;
};

export default function MenuList() {
  const [products, setProducts] = useState(([] as ProductType[]) || []);
  const { data, isLoading } = useQuery(['prod', '110720'], async () => await requestSubCategories('110720'), {
    retry: 0,
    staleTime: 60 * 5000,
  });

  console.log('data: ', data?.productList?.productList);

  useEffect(() => {
    if (!isLoading && data) {
      setProducts(data.productList?.productList ?? []);
    }
  }, [data, isLoading]);

  return (
    <S.Container>
      {products?.map(({ image, name }: ProductType) => {
        return <ImageCard src={image} key={'key' + name} />;
      })}
    </S.Container>
  );
}
