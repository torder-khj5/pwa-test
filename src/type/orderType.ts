import { type ProductType } from '@type/categoryType.ts';

export interface OrderType extends ProductType {
  date?: Date;
  tableNum?: string;
}
