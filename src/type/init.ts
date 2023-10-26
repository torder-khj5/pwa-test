import { type Store } from '@type/store.ts';
import { type Goods } from '@type/product.ts';
import { type CategoryType } from '@type/categoryType.ts';

export interface InitData {
  store: Store; // 상점정보
  category: CategoryType[]; // 카테고리
  goods: Goods[]; // 상품정보
}
