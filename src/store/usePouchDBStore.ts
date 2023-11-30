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

  const syncDB = PouchDB.sync(localDB, remoteDB, {
    live: true,
    retry: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    include_docs: true,
  });

  syncDB
    .on('change', ({ change, direction }) => {
      // console.log('Change', change);
      // console.log('Direction', direction);
      usePouchDBAction().getAllDocs();
    })
    .on('paused', function () {
      // console.log('replication up to date, user went offline');
      usePouchDBAction().getAllDocs();
    })
    .on('active', function () {
      // replicate resumed (e.g. new changes replicating, user went back online)
    })
    .on('denied', function (err) {
      // a document failed to replicate (e.g. due to permissions)
      console.log(err);
    })
    .on('complete', function (info) {
      // handle complete
      console.log(info);
    })
    .on('error', function (err) {
      // handle error
      console.log(err);
    });

  return state;
};

export const usePouchDBStore = create(devtools<PouchDBState>(pouchDBState, { name: 'pouchDBState' }));

export const usePouchDBAction = (): PouchDBAction => ({
  setOrderIdList: (data: any) => usePouchDBStore.setState({ orderIdList: data }),
  getAllDocs: async () => {
    try {
      const res = await usePouchDBStore.getState().remoteDB?.allDocs<ProductType>();
      usePouchDBStore.setState({ orderIdList: res });
      return res || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  getDoc: async (docId: string) => {
    try {
      try {
        return await usePouchDBStore.getState().localDB?.get<ProductType>(docId);
      } catch (e) {
        return await usePouchDBStore.getState().remoteDB?.get<ProductType>(docId);
      }
      // await usePouchDBStore.getState().remoteDB?.get<ProductType>(docId);
    } catch (err) {
      console.log('docId: ', docId);
      console.error(err);
      return null;
    }
  },
  addOrderData: async (product: ProductType) => {
    try {
      const res = await usePouchDBStore.getState().localDB?.post(product);
      console.log('새로운 주문: ', res);
      // await usePouchDBAction().getAllDocs();
      // console.log('getAllDocs: ');
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
