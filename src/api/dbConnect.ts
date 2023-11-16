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
  skip_setup: false, // DB 없을떄 setup
});

// DB 연결 및 동기화
export const connectDB = () => {
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
      // refreshPage();
    });
};

// function init() {
//   console.log('connect');
//   connectDB();
//   console.log('connect done');
// }
//
// init();
