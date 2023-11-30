import { type ProductType } from '@type/categoryType.ts';
import { useOrderAction } from '@store/useOrderStore.ts';
import { useEffect } from 'react';

import PouchDB from 'pouchdb';

const ADMIN_ACCOUNT = {
  username: 'admin',
  password: '0000',
};

export const localDB = new PouchDB('test', {
  auto_compaction: true, // 자동 압축 활성화, 기본값 false,
  // adapter: 'indexeddb', // 'indexeddb' | 'idb' | 'leveldb' | 'http'.
});

export const remoteDB = new PouchDB('https://192.168.101.6:6984/test', {
  auth: ADMIN_ACCOUNT,
  skip_setup: false,
});

export default function usePouchDB() {
  const { setOrderIdList } = useOrderAction();

  useEffect(() => {
    connectDB();
  }, []);

  // DB 연결 및 동기화
  const connectDB = () => {
    localDB.sync(remoteDB, {
      live: true,
      retry: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      include_docs: true,
    });

    // DB 변경 감지
    remoteDB
      .changes({
        since: 'now',
        live: true,
      })
      .on('change', (change) => {
        // console.log('원격 데이터베이스 변경 감지:', change);
        getAllDocs(); // 리모트 디비가 온체인지 될떄마다 데이터 리프레시 해줘야함
        document.dispatchEvent(new Event('pouchDBChange'));
      });
  };

  const getAllDocs = async () => {
    try {
      const res = await remoteDB.allDocs();
      setOrderIdList(res);
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  const getDoc = async (docId: string) => await localDB.get(docId);

  const addOrderData = async (product: ProductType) => {
    const doc = product;
    try {
      // post는 _id를 자동으로 생성
      const response = await localDB.post(doc);
      // console.log('새로운 주문: ', response);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return { getAllDocs, getDoc, addOrderData };
}
