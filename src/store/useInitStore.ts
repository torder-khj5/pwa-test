// import { type InitData } from '@type/init.ts';
// import { withSelector } from '@store/middleware';
// import { devtools, persist } from 'zustand/middleware';
// import { create } from 'zustand';
//
// interface InitAction {
//   setStore: () => void;
//   setCategory: () => void;
//   setGoods: () => void;
// }
//
// const initStore = () => ({
//   store: {
//     name: '',
//     address: '',
//   },
//   category: [
//     {
//       id: '',
//       name: '',
//       code: '',
//       subCategory: [
//         {
//           id: '',
//           name: '',
//           code: '',
//         },
//       ],
//     },
//   ],
//   goods: [
//     {
//       name: '',
//       code: '',
//       src: '',
//     },
//   ],
// });
//
// export const useInitStore = create(persist(devtools<InitData>(initStore, { name: 'initStore' }), { name: 'init' }));
//
// export const useInitAction = (): InitAction => ({
//   setStore: () => {
//     useInitStore.setState({ store: { name: '', address: '' } });
//   },
//   setCategory: () => {
//     const currentCategory = useInitStore.getState().category;
//     useInitStore.setState({
//       category: [...currentCategory, { id: '', name: '', code: '', subCategory: [{ id: '', name: '', code: '' }] }],
//     });
//   },
//   setGoods: () => {
//     const currentGoods = useInitStore.getState().goods;
//     useInitStore.setState({ goods: [...currentGoods, { name: '', code: '', src: '' }] });
//   },
// });
//
// export const useInitSelector = withSelector(useInitStore);
