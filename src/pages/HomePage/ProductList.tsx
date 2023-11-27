import FloatingOrderList from 'src/pages/HomePage/FloatingOrderList';
import { type ProductType } from '@type/categoryType.ts';
import { usePouchDBAction } from '@store/usePouchDBStore.ts';
import ImageCard from '@pages/HomePage/ImageCard';
import { PRODUCT_LIST } from '@constants/products.ts';
import { requestProductList } from '@api/categories.ts';
import * as S from './styles.tsx';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function ProductList() {
  const [products, setProducts] = useState(([] as ProductType[]) || []);
  const { data, isLoading } = useQuery(['prod'], requestProductList, {
    retry: 0,
    staleTime: 60 * 5000,
    initialData: () => {
      return PRODUCT_LIST;
    },
    networkMode: 'offlineFirst',
  });

  const { addOrderData, getAllDocs } = usePouchDBAction();

  useEffect(() => {
    if (!isLoading && data && data.data) {
      setProducts(data.data);
    }
  }, [data, isLoading]);

  const handleClick = (product: ProductType) => {
    console.log('주문입력');
    addOrderData(product).then(async () => {
      await getAllDocs();
    }); // 데이터만 쏴주면 댐 -> 훅 안에서 알아서 데이터 갱신 시킴

    // // Show alert when the user clicks on a product
    // const userConfirmed = window.confirm('주문을 추가하시겠습니까?');
    //
    // if (userConfirmed) {
    //   addOrderData(product).then(async (r) => {
    //     await getAllDocs();
    //   });
    // }

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
