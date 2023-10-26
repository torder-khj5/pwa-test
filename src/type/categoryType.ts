import { type ProductLanguage } from '@type/product.ts';

export interface ProductType {
  languageName: ProductLanguage;
  name: string;
  code: string;
  html: string;
  image: string;
  price: number;
  countryOfOrigin: string;
}

export interface ChildCategoryType {
  id: string;
  name: string;
  languageName: ProductLanguage;
  categoryCode: string;
  code: string;
  productList: ProductType[];
  // childCategorySort: number;
  // childCategoryProductCount: number;
}

export type CategoryType = {
  id: string;
  name: string;
  languageName: ProductLanguage;
  code: string;
  subCategory: ChildCategoryType[];
  // serviceUse: number;
  // categorySort: number;
  // childCategoryList: childCategoryType[];
};

export interface Category {
  category: CategoryType[];
  currentCategory: CategoryType;
  currentSubCategory: ChildCategoryType[];
  products: ProductType[];
}
