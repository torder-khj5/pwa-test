import { type ProductType } from '@type/categoryType.ts'; // ProductType 예시 타입 임포트
import { withSelector } from '@store/middleware';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import PouchDB from 'pouchdb';

type PouchDBState = {
  localDB: PouchDB.Database;
  remoteDB: PouchDB.Database;
  orderIdList: PouchDB.Core.AllDocsResponse<ProductType> | null;
};

interface PouchDBAction {
  getAllDocs: () => Promise<PouchDB.Core.AllDocsResponse<ProductType> | null>;
  getDoc: (docId: string) => Promise<ProductType | null>;
  addOrderData: (product: ProductType) => Promise<void>;
  setOrderIdList: (data: PouchDB.Core.AllDocsResponse<ProductType>) => void;
  subscribeToChanges: () => void;
}

const pouchDBState = () => {
  const localDB = new PouchDB('test', {
    auto_compaction: true,
  });

  const remoteDB = new PouchDB('https://192.168.101.6:6984/test', {
    auth: {
      username: 'admin',
      password: '0000',
    },
    skip_setup: false,
  });

  const state = {
    localDB,
    remoteDB,
    orderIdList: null,
  };

  const changes = remoteDB.changes({
    since: 'now',
    live: true,
    include_docs: true,
  });

  changes.on('change', async (change: PouchDB.Core.ChangesResponseChange<any>) => {
    console.log('store 선언 remote DB changes(원격 디비 변경 감지): ', change);

    await usePouchDBAction().getAllDocs();
    const updateOrderIdList = await remoteDB.allDocs<ProductType>();
    console.log('updateOrderId: ', updateOrderIdList);
    // usePouchDBStore.setState({ orderIdList: updateOrderIdList });
    // usePouchDBAction().setOrderIdList(updateOrderIdList);
  });

  changes.on('error', (error) => {
    console.log('Changes error: ', error);
  });

  return state;
};

export const usePouchDBStore = create(devtools<PouchDBState>(pouchDBState, { name: 'pouchDBState' }));

export const usePouchDBAction = () => ({
  setOrderIdList: (data: any) => usePouchDBStore.setState({ orderIdList: data }),
  getAllDocs: async () => {
    try {
      console.log('start getAllDocs');
      const res = await usePouchDBStore.getState().remoteDB?.allDocs<ProductType>();
      usePouchDBStore.setState({ orderIdList: res });
      return res;
    } catch (err) {
      console.error(err);
    }
  },
  getDoc: async (docId: string) => {
    try {
      await usePouchDBStore.getState().remoteDB?.get<ProductType>(docId);
    } catch (err) {
      console.log('docId: ', docId);
      console.error(err);
    }
  },
  addOrderData: async (product: ProductType) => {
    try {
      const res = await usePouchDBStore.getState().localDB?.post(product);
      console.log('새로운 주문: ', res);
      // await usePouchDBAction().getAllDocs();
      // console.log('getAllDocs: ');
      return res;
    } catch (err) {
      console.error(err);
    }
  },
  subscribeToChanges: () => {
    const changes = usePouchDBStore.getState().remoteDB?.changes({
      since: 'now',
      live: true,
      include_docs: true,
    });

    changes?.on('change', async (change: PouchDB.Core.ChangesResponseChange<any>) => {
      console.log('subscribe remote DB changes(원격 디비 변경 감지): ', change);

      await usePouchDBAction().getAllDocs();
      const updateOrderIdList = await usePouchDBStore.getState().remoteDB?.allDocs<ProductType>();
      console.log('updateOrderId: ', updateOrderIdList);
      // usePouchDBAction().setOrderIdList(updateOrderIdList);
    });

    changes?.on('error', (error) => {
      console.log('Changes error: ', error);
    });
  },
});

export const usePouchDBSelector = withSelector(usePouchDBStore);
