import { type ProductType } from '@type/categoryType.ts';
import { palette } from '@styles/colors_v2.ts';
import { usePouchDBAction, usePouchDBSelector } from '@store/usePouchDBStore.ts';
import { useOrderAction, useOrderSelector } from '@store/useOrderStore.ts';
import { type rowsValue } from '@pages/HomePage/FloatingOrderList';
import Typography from '@components/Typography';
import { CloseButton } from '@components/@headless/Modal/CloseButton.tsx';
import Modal from '@components/@headless/Modal';
import bill from '@assets/icons/icon-bill.png';
import * as S from './styles.tsx';
import { useEffect } from 'react';

export default function BottomBar() {
  const { setOrderList } = useOrderAction();
  const { getDoc } = usePouchDBAction();
  const { orderList } = useOrderSelector(['orderList']);
  const { orderIdList } = usePouchDBSelector(['orderIdList']);

  useEffect(() => {
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

    fetchData();
  }, [orderIdList]);

  const renderMenuDetails = (
    <>
      {Array.isArray(orderList) && orderList.length > 0 ? (
        orderList.map(({ name, code, price }: ProductType, index) => (
          <S.TableRow key={`order-${index}-${code}`}>
            <Typography tag="h6" fontWeight={400} color={palette.gray_600}>
              {name}
            </Typography>
            <Typography tag="h6" fontWeight={400} color={palette.gray_600}>
              {price}원
            </Typography>
            <Typography tag="h6" fontWeight={400} color={palette.blue_500}>
              {index + 1}
            </Typography>
            <Typography tag="h6" fontWeight={600} color={palette.gray_600}>
              {price * (index + 1)}원
            </Typography>
          </S.TableRow>
        ))
      ) : (
        <S.TableRow>
          <Typography tag="h6">주문내역이 없습니다</Typography>
        </S.TableRow>
      )}
    </>
  );

  return (
    <S.BottomBarContainer>
      <Modal>
        <Modal.Trigger>
          <S.BottomBarButton>
            <S.IconArea>
              <img src={bill} width={30} height={30} alt={'icon_bill'} />
            </S.IconArea>
            <Typography tag="h7">주문내역</Typography>
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
                <S.TableContents>{renderMenuDetails}</S.TableContents>
              </S.OrderModalListTable>
              <S.OrderModalTotalPriceArea>
                <Typography tag="h5">합계</Typography>
                <Typography tag="h5">{0}원</Typography>
              </S.OrderModalTotalPriceArea>
            </S.OrderModalContents>
          </S.OrderModalWrapper>
        </Modal.Content>
      </Modal>
    </S.BottomBarContainer>
  );
}
