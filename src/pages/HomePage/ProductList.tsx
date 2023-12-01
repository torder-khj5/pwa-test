import { type ProductType } from '@type/categoryType.ts';
import { useTableSelector } from '@store/useTableStore.ts';
import { usePouchDBAction } from '@store/usePouchDBStore.ts';
import TotalOrder from '@pages/HomePage/TotalOrder';
import ImageCard from '@pages/HomePage/ImageCard';
import { PRODUCT_LIST } from '@constants/products.ts';
import Typography from '@components/Typography';
import { CommonButton } from '@components/CommonButton';
import ModalContent from '@components/@headless/Modal/Content.tsx';
import Modal from '@components/@headless/Modal';
import { requestProductList } from '@api/categories.ts';
import * as S from './styles.tsx';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export const initProduct: ProductType = {
  languageName: { ko: '', en: '', jp: '', zh_hans: '', zh_hant: '' },
  name: '',
  code: '',
  html: '',
  image: '',
  price: 0,
  countryOfOrigin: '',
  date: new Date(),
  tableNum: '0',
};

export default function ProductList() {
  const [products, setProducts] = useState(([] as ProductType[]) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useQuery(['prod'], requestProductList, {
    retry: 0,
    staleTime: 60 * 5000,
    initialData: () => {
      return PRODUCT_LIST;
    },
    networkMode: 'offlineFirst',
  });
  const [selectProduct, setSelectProduct] = useState<ProductType>(initProduct);
  const { selectTable } = useTableSelector(['selectTable']);

  const { addOrderData, getAllDocs } = usePouchDBAction();

  useEffect(() => {
    if (!isLoading && data && data.data) {
      setProducts(data.data);
    }
  }, [data, isLoading]);

  const handleClick = (product: ProductType) => {
    setIsModalOpen(true);
    setSelectProduct(product);
  };

  const requestOrder = () => {
    // console.log('주문입력');
    const addData = { ...selectProduct, date: new Date(), tableNum: selectTable };
    addOrderData(addData).then(async () => {
      await getAllDocs();
    });
    setIsModalOpen(false);
    notify();
    // console.log('주문입력 done');
  };

  if (isLoading) {
    return <div></div>;
  }

  const notify = () => toast.success('주문이 완료되었습니다.');

  return (
    <>
      <Toaster position={'top-center'} />
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
      {/* <BottomBar /> */}
      <TotalOrder />
      <Modal open={isModalOpen}>
        <ModalContent>
          <S.ModalHeaderArea>{/* <CloseButton /> */}</S.ModalHeaderArea>
          <Typography tag="h5">{selectProduct.name}을(를) 주문 하시겠습니까?</Typography>
          <S.ModalButton>
            <CommonButton onButtonClick={() => requestOrder()} label={'주문하기'} btnSize={'md'} />
          </S.ModalButton>
        </ModalContent>
      </Modal>
    </>
  );
}
