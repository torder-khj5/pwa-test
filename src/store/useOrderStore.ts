import { type ProductType } from '@type/categoryType.ts';
import { withSelector } from './middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type OrderState = {
  orderIdList: any;
  orderList: any;
  selectOrder: ProductType;
};

interface OrderAction {
  setOrderIdList: (orderIdList: any) => void;
  setOrderList: (orderList: any) => void;
  setSelectOrder: (orderObj: any) => void;
}

const orderState = () => ({
  orderIdList: [],
  orderList: [],
  selectOrder: {
    languageName: {
      ko: '',
      en: '',
      jp: '',
      zh_hans: '',
      zh_hant: '',
    },
    name: '',
    code: '',
    html: '',
    image: '',
    price: 0,
    countryOfOrigin: '',
  } satisfies ProductType,
});

export const useOrderStore = create(
  persist(devtools<OrderState>(orderState, { name: 'orderStore' }), { name: 'order' })
);

export const useOrderAction = (): OrderAction => ({
  setOrderIdList: (orderIdList: any) => {
    useOrderStore.setState(() => ({ orderIdList }));
  },
  setOrderList: (orderList: any) => {
    useOrderStore.setState(() => ({ orderList }));
  },
  setSelectOrder: (selectOrder: ProductType) => {
    useOrderStore.setState({ selectOrder });
  },
});

export const useOrderSelector = withSelector(useOrderStore);
