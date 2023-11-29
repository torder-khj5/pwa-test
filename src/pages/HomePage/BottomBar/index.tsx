import { type ProductType } from '@type/categoryType.ts';
import { palette } from '@styles/colors_v2.ts';
import { usePouchDBAction, usePouchDBSelector } from '@store/usePouchDBStore.ts';
import { useOrderAction, useOrderSelector } from '@store/useOrderStore.ts';
import { type rowsValue } from '@pages/HomePage/FloatingOrderList';
import Typography from '@components/Typography';
import { CloseButton } from '@components/@headless/Modal/CloseButton.tsx';
import Modal from '@components/@headless/Modal';
import bill from '@assets/icons/icon-bill.svg';
import * as S from './styles.tsx';
import { useEffect, useState } from 'react';

const OrderItem = ({ name, price, total }: Partial<ProductType> & { total: number }) => (
  <S.TableRow>
    <Typography tag="h6" fontWeight={400} color={palette.gray_600}>
      {name}
    </Typography>
    <Typography tag="h6" fontWeight={400} color={palette.gray_600}>
      {price}원
    </Typography>
    <Typography tag="h6" fontWeight={400} color={palette.blue_500}>
      {1}
    </Typography>
    <Typography tag="h6" fontWeight={600} color={palette.gray_600}>
      {total}원
    </Typography>
  </S.TableRow>
);

export default function BottomBar() {
  const { setOrderList } = useOrderAction();
  const { getDoc } = usePouchDBAction();
  const { orderList } = useOrderSelector(['orderList']);
  const { orderIdList } = usePouchDBSelector(['orderIdList']);
  const [total, setTotal] = useState<number>(0);

  const fetchData = async () => {
    try {
      if (orderIdList?.rows) {
        const orderItems = await Promise.all(
          orderIdList.rows.map(async ({ id }: rowsValue) => {
            const doc = await getDoc(id);
            return doc?.name ? { name: doc.name, code: doc.code, price: doc.price } : null;
          })
        );
        console.log('orderItems: ', orderItems);
        setOrderList(orderItems);
      }
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    }
  };

  const calculateTotal = () => {
    if (Array.isArray(orderList) && orderList.length > 0) {
      const totalPrice = orderList.reduce((acc, { price }) => acc + price, 0);
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    fetchData();
    calculateTotal();
  }, [orderIdList]);

  const renderOrderList = () => {
    if (Array.isArray(orderList) && orderList.length > 0) {
      return orderList.map(({ name, code, price }: ProductType, index) => (
        <OrderItem key={`order-${index}-${code}`} name={name} price={price} total={price} />
      ));
    } else {
      return (
        <S.TableRow>
          <Typography tag="h6">
            {orderList === null ? '주문 내역을 불러오는 중입니다' : '주문내역이 없습니다'}
          </Typography>
        </S.TableRow>
      );
    }
  };

  return (
    <S.BottomBarContainer>
      <Modal>
        <Modal.Trigger>
          <S.BottomBarButton>
            <img src={bill} width={30} height={30} alt={'icon_bill'} />
            <div style={{ marginLeft: '5px' }}>
              <Typography tag="h7" color={'white'}>
                주문내역
              </Typography>
            </div>
          </S.BottomBarButton>
        </Modal.Trigger>
        <Modal.Content>
          <S.OrderModalWrapper>
            <S.OrderModalContents>
              <S.OrderModalHeaderArea>
                <Typography tag="h4" fontWeight={700}>
                  주문내역
                </Typography>
                <CloseButton />
              </S.OrderModalHeaderArea>
              <S.OrderModalListTable>
                <S.TableHeader>
                  <Typography tag="h7">음식 이름</Typography>
                  <Typography tag="h7">상품 가격</Typography>
                  <Typography tag="h7">주문 수량</Typography>
                  <Typography tag="h7">총 주문 금액</Typography>
                </S.TableHeader>
                <S.TableContents>{renderOrderList()}</S.TableContents>
              </S.OrderModalListTable>
              <S.OrderModalTotalPriceArea>
                <Typography tag="h5">합계</Typography>
                <Typography tag="h5">{total}원</Typography>
              </S.OrderModalTotalPriceArea>
            </S.OrderModalContents>
          </S.OrderModalWrapper>
        </Modal.Content>
      </Modal>
    </S.BottomBarContainer>
  );
}
