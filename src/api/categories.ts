import { type CategoryType, type ChildCategoryType } from '@type/categoryType.ts';
import { SAMPLE_CATEGORY } from '@constants/category.ts';
import axios from 'axios';

export const requestCategories = async () => {
  // return await axios.get('/categories');
  return SAMPLE_CATEGORY;
};

export const requestSubCategories = async (categoryCode: string) => {
  const category = await axios.get('/categories');
  const selectCategory = category?.data.find(({ code }: CategoryType) => code === categoryCode);
  const subCategory = selectCategory?.subCategory;
  const productList = subCategory?.find(
    ({ categoryCode: selectCategoryCode }: ChildCategoryType) => selectCategoryCode === categoryCode
  );
  return {
    category,
    selectCategory,
    subCategory,
    productList,
  };
};
