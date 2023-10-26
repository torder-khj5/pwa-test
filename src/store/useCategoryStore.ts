import { type Category, type CategoryType, type ChildCategoryType, type ProductType } from '@type/categoryType.ts';
import { withSelector } from '@store/middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface CategoryAction {
  setCategory: (category: CategoryType[]) => void;
  setCurrentCategory: (categoryCode: string) => void;
  setCurrentSubCategory: () => void;
  getSubCategory: () => ChildCategoryType[];
  getProducts: (subCategoryCode: string) => ProductType[] | [];
}

const categoryStore = () => ({
  category: [],
  currentCategory: {
    id: '',
    name: '',
    languageName: {
      ko: '',
      en: '',
      jp: '',
      zh_hans: '',
      zh_hant: '',
    },
    code: '',
    subCategory: [],
  },
  currentSubCategory: [],
  products: [],
});

export const useCategoryStore = create(
  persist(devtools<Category>(categoryStore, { name: 'categoryStore' }), { name: 'category' })
);

export const useCategoryAction = (): CategoryAction => ({
  setCategory: (category) => {
    useCategoryStore.setState({ category });
    const currentSubCategory = category.find(
      (category) => category.code === useCategoryStore.getState().currentCategory.code
    )?.subCategory;
    useCategoryStore.setState({ currentSubCategory });
  },
  setCurrentCategory: (categoryCode) => {
    const currentCategory = useCategoryStore
      .getState()
      .category.find(({ code }: CategoryType) => code === categoryCode);
    useCategoryStore.setState({ currentCategory });
    useCategoryStore.setState({ currentSubCategory: currentCategory?.subCategory ?? [] });
  },
  setCurrentSubCategory: () => {
    const currentSubCategory = useCategoryStore.getState().currentCategory.subCategory;
    useCategoryStore.setState({ currentSubCategory });
    return '';
  },
  getSubCategory: () => {
    const category = useCategoryStore.getState().currentCategory;
    return category.subCategory;
  },
  getProducts: (subCategoryCode) => {
    const subCategory = useCategoryStore
      .getState()
      .currentSubCategory.find(({ categoryCode }: ChildCategoryType) => categoryCode === subCategoryCode);
    return subCategory?.productList ?? [];
  },
});

export const useCategorySelector = withSelector(useCategoryStore);
