import { type ProductType } from '@type/categoryType.ts';
import ImageCard from '@pages/HomePage/ImageCard';
import usePouchDB from '@hooks/usePouchDB.ts';
import { requestProductList } from '@api/categories.ts';
import * as S from './styles.tsx';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function ProductList() {
  const [products, setProducts] = useState(([] as ProductType[]) || []);
  const { data, isLoading } = useQuery(['prod'], requestProductList, {
    retry: 0,
    staleTime: 60 * 5000,
  });

  const { addOrderData, allData } = usePouchDB();

  useEffect(() => {
    if (!isLoading && data && data.data) {
      setProducts(data.data);
    }
  }, [data, isLoading]);

  const handleClick = () => {
    console.log('주문입력');
    addOrderData().then((r) => console.log('add order data')); // 데이터만 쏴주면 댐 -> 훅 안에서 알아서 데이터 갱신 시킴
    // getDocs().then((r) => console.log(allData)); // 필요없음
    console.log('주문입력 done');
  };

  return (
    <S.ProductContainer>
      {products?.map(({ image, name, price }: ProductType, index) => {
        return (
          <S.ProductItemContainer key={`product_${name}_${index}`} onClick={handleClick}>
            <ImageCard src={image} />
            <S.ProductItemInfo>
              <div>{name}</div>
              <div>{price}</div>
            </S.ProductItemInfo>
          </S.ProductItemContainer>
        );
      })}
    </S.ProductContainer>
  );
}
