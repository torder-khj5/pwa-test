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

  const { connectDB, getDocs, addOrderData, allData } = usePouchDB();

  useEffect(() => {
    connectDB();

    if (!isLoading && data && data.data) {
      setProducts(data.data);
    }
  }, [connectDB, data, isLoading]);

  const handleClick = () => {
    console.log('주문입력');
    addOrderData().then((r) => console.log('add order data'));
    getDocs().then((r) => console.log(allData));
    // getDocs().then((r) => console.log('handleClick done'));
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
