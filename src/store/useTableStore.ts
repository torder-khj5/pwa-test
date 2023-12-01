import { withSelector } from '@store/middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface InitAction {
  setSelectTable: (tableNum: string) => void;
}

const tableStore = () => ({
  tableList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  selectTable: '0',
});

export const useTableStore = create(persist(devtools(tableStore, { name: 'tableStore' }), { name: 'table' }));

export const useTableAction = (): InitAction => ({
  setSelectTable: (tableNum: string) => {
    useTableStore.setState({ selectTable: tableNum });
  },
});

export const useTableSelector = withSelector(useTableStore);
