import { type Category, type CategoryType, type ChildCategoryType, type ProductType } from '@type/categoryType.ts';
import { withSelector } from '@store/middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface CategoryAction {
  setCategory: (category: CategoryType[]) => void;
  setCurrentCategory: (categoryCode: string) => void;
  setCurrentSubCategory: (code: string) => void;
  getSubCategory: () => ChildCategoryType[];
  getProducts: () => ProductType[] | [];
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
  currentSubCategoryCode: '',
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
    // useCategoryStore.setState({ currentSubCategory: currentCategory?.subCategory ?? [] });
  },
  setCurrentSubCategory: (code: string) => {
    useCategoryStore.setState({ currentSubCategoryCode: code });

    const productsList = useCategoryStore
      .getState()
      .currentCategory.subCategory.filter(({ code: subCategoryCode }: ChildCategoryType) => subCategoryCode === code);
    useCategoryStore.setState({ products: productsList[0].productList ?? [] });
  },
  getSubCategory: () => {
    const category = useCategoryStore.getState().currentCategory;
    return category.subCategory;
  },
  getProducts: () => {
    console.log('call products ');
    const currentCategory = useCategoryStore.getState().currentCategory.code;
    console.log('current: ', currentCategory);
    const subCategory = useCategoryStore
      .getState()
      .currentSubCategory.find(({ categoryCode }: ChildCategoryType) => categoryCode === currentCategory);
    return subCategory?.productList ?? [];
  },
});

export const useCategorySelector = withSelector(useCategoryStore);
