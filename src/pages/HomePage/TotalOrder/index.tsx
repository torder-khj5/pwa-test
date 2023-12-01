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
import { useEffect } from 'react';

interface OrderItemType {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

type ProcessedOrderType = {
  tableNum: string;
  items: OrderItemType[];
  totalPrice: number;
};

const OrderItem = ({ name, price, quantity, total }: OrderItemType) => (
  <S.TableRow>
    <Typography tag="h6" fontWeight={400} color={palette.gray_600}>
      {name}
    </Typography>
    <Typography tag="h6" fontWeight={400} color={palette.gray_600}>
      {price.toLocaleString()}원
    </Typography>
    <Typography tag="h6" fontWeight={400} color={palette.blue_500}>
      x{quantity}
    </Typography>
    <Typography tag="h6" fontWeight={600} color={palette.gray_600}>
      {total.toLocaleString()}원
    </Typography>
  </S.TableRow>
);

export default function TotalOrder() {
  const { setOrderList } = useOrderAction();
  const { getDoc } = usePouchDBAction();
  const { orderList } = useOrderSelector(['orderList']);
  const { orderIdList } = usePouchDBSelector(['orderIdList']);

  const fetchData = async () => {
    try {
      if (orderIdList?.rows) {
        const orderItems = await Promise.all(
          orderIdList.rows.map(async ({ id }: rowsValue) => {
            const doc = await getDoc(id);
            return doc?.name
              ? { name: doc?.name, code: doc?.code, price: doc?.price, date: doc?.date, tableNum: doc?.tableNum }
              : null;
          })
        );
        // console.log('orderItems: ', orderItems);
        setOrderList(orderItems);
      }
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    }
  };

  const calculateQuantityAndTotal = (orderList: ProductType[]) => {
    const groupedOrders: Record<string, { items: OrderItemType[]; totalPrice: number }> = {};

    orderList.forEach(({ name, price, tableNum }) => {
      const existingItem = groupedOrders[tableNum]?.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total += price;
      } else {
        const newItem: OrderItemType = { name, price, quantity: 1, total: price };

        if (!groupedOrders[tableNum]) {
          groupedOrders[tableNum] = { items: [], totalPrice: 0 };
        }

        groupedOrders[tableNum].items.push(newItem);
        groupedOrders[tableNum].totalPrice += price;
      }
    });

    return Object.entries(groupedOrders).map(([tableNum, { items, totalPrice }]) => ({
      tableNum,
      items,
      totalPrice,
    }));
  };

  useEffect(() => {
    fetchData();
  }, [orderIdList]);

  const renderOrderList = () => {
    if (Array.isArray(orderList) && orderList.length > 0) {
      const processedOrderList: ProcessedOrderType[] = calculateQuantityAndTotal(orderList);
      // console.log('processedOrderList: ', processedOrderList);
      // 각 테이블 번호 별로 주문 내역 페이지를 구성
      return processedOrderList.map(({ tableNum, items, totalPrice }, index) => (
        <S.TableInfo key={`table-${tableNum}`}>
          <Typography tag="h5" fontWeight={600} style={{ padding: '10px 20px' }}>
            {`테이블 ${tableNum}`}
          </Typography>
          {items.map(({ name, price, quantity, total }, itemIndex) => (
            <OrderItem
              key={`order-${index}-${itemIndex}`}
              name={name}
              price={price}
              quantity={quantity}
              total={total}
            />
          ))}
          <S.OrderModalTotalPriceArea>
            <Typography tag="h5">총 합계</Typography>
            <Typography tag="h5">{totalPrice.toLocaleString()}원</Typography>
          </S.OrderModalTotalPriceArea>
        </S.TableInfo>
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
            </S.OrderModalContents>
          </S.OrderModalWrapper>
        </Modal.Content>
      </Modal>
    </S.BottomBarContainer>
  );
}
