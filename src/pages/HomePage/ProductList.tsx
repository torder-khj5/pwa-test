import FloatingOrderList from 'src/pages/HomePage/FloatingOrderList';
import { type ProductType } from '@type/categoryType.ts';
import ImageCard from '@pages/HomePage/ImageCard';
import usePouchDB from '@hooks/usePouchDB.ts';
import { PRODUCT_LIST } from '@constants/products.ts';
import { SAMPLE_CATEGORY } from '@constants/category.ts';
import { requestProductList } from '@api/categories.ts';
import * as S from './styles.tsx';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function ProductList() {
  const queryClient = useQueryClient();

  const [products, setProducts] = useState(([] as ProductType[]) || []);
  const { data, isLoading } = useQuery(['prod'], requestProductList, {
    retry: 0,
    staleTime: 60 * 5000,
    initialData: () => {
      return PRODUCT_LIST;
    },
    networkMode: 'offlineFirst',
  });

  const { addOrderData } = usePouchDB();

  useEffect(() => {
    if (!isLoading && data && data.data) {
      setProducts(data.data);
    }
  }, [data, isLoading]);

  useEffect(() => {
    // 커스텀 이벤트에 대한 리스너 등록
    const handlePouchDBChange = () => {
      console.log('PouchDB 변경 감지');
      // PouchDB 변경 감지 시 데이터 다시 불러오기
      queryClient.invalidateQueries(['prod']);
    };

    document.addEventListener('pouchDBChange', handlePouchDBChange);

    return () => {
      // 컴포넌트가 언마운트되면 이벤트 리스너 제거
      document.removeEventListener('pouchDBChange', handlePouchDBChange);
    };
  }, [queryClient]);

  const handleClick = (product: ProductType) => {
    console.log('주문입력');
    addOrderData(product).then((r) => console.log('add order data')); // 데이터만 쏴주면 댐 -> 훅 안에서 알아서 데이터 갱신 시킴
    console.log('주문입력 done');
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <FloatingOrderList />
      <S.ProductContainer>
        {products?.map((product: ProductType, index) => {
          const { image, name, price } = product;
          return (
            <S.ProductItemContainer key={`product_${name}_${index}`} onClick={() => handleClick(product)}>
              <ImageCard src={image} />
              <S.ProductItemInfo>
                <div>{name}</div>
                <div>{price}</div>
              </S.ProductItemInfo>
            </S.ProductItemContainer>
          );
        })}
      </S.ProductContainer>
    </>
  );
}
