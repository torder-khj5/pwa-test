import { PRODUCT_LIST } from '@constants/products.ts';
import { localDB, remoteDB } from '../router';
import { useState } from 'react';

export default function usePouchDB() {
  const [allData, setAllData] = useState<any>(null);

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
        // 필터링
        // filter: (doc) => {
        //   return true
        // }
      })
      .on('change', (change) => {
        console.log('원격 데이터베이스 변경 감지:', change);
        window.location.reload();
        // refreshPage();
      });
  };

  const getDocs = async () => {
    try {
      const res = await remoteDB.allDocs();
      setAllData(res);
      // return await localDB.allDocs();
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  const addOrderData = async () => {
    const doc = PRODUCT_LIST.data[0];
    console.log('doc: ', doc);
    try {
      // post는 _id를 자동으로 생성
      const response = await localDB.post(doc);
      console.log('새로운 주문: ', response);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return { connectDB, getDocs, addOrderData, allData };
}
