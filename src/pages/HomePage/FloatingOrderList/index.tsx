import { type ProductType } from '@type/categoryType.ts';
import { useOrderAction, useOrderSelector } from '@store/useOrderStore.ts';
import usePouchDB from '@hooks/usePouchDB.ts';
import * as S from './styles.tsx';
import { useEffect } from 'react';

export type rowsValue = {
  id: string;
  key: string;
  value: {
    rev: string;
  };
};
export default function FloatingOrderList() {
  const { getDoc } = usePouchDB();
  const { setOrderList } = useOrderAction();
  const { orderList, orderIdList } = useOrderSelector(['orderList', 'orderIdList']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (orderIdList?.rows) {
          const orderItems = await Promise.all(
            orderIdList.rows.map(async ({ id, key }: rowsValue) => {
              return await getDoc(id);
            })
          );

          setOrderList(orderItems);
        }
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [orderIdList]);

  return (
    <S.OrderListContainer>
      <div className={'title'}>주문내역</div>
      <div className={'title'}>총 주문 개수: {orderList.length ?? 0}</div>
      {Array.isArray(orderList) && orderList.length > 0 ? (
        orderList.map(({ name, code }: ProductType, index) => (
          <S.OrderItem key={`order-${index}-${code}`}>
            {index + 1} {name}
          </S.OrderItem>
        ))
      ) : (
        <S.OrderItem>주문내역이 없습니다</S.OrderItem>
      )}
    </S.OrderListContainer>
  );
}
