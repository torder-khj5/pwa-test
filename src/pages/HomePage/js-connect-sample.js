const ADMIN_ACCOUNT = {
  username: 'admin',
  password: '0000',
};

const localDB = new PouchDB('test', {
  auto_compaction: true, // 자동 압축 활성화, 기본값 false,
  // adapter: 'indexeddb', // 'indexeddb' | 'idb' | 'leveldb' | 'http'.
});

// const remoteDB = new PouchDB('http://192.168.20.65:5984/test', {
const remoteDB = new PouchDB('https://192.168.101.6:6984/test', {
  auth: ADMIN_ACCOUNT,
  skip_setup: false, // DB 없을떄 setup
});

function init() {
  connectDB();
  setHandler();
  renderOrderList();
}

// DB 연결 및 동기화
function connectDB() {
  localDB.sync(remoteDB, {
    live: true,
    retry: true,
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
      refreshPage();
    });
}

// 버튼 이벤트 등록
function setHandler() {
  const btn = document.getElementById('button');
  btn.addEventListener('click', addNewDoc);
}

async function renderOrderList() {
  const orderList = document.getElementById('order-list');
  const title = document.getElementById('title');
  try {
    const { total_rows, rows } = await getDocs();
    orderList.innerHTML = '';
    rows.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.id;
      orderList.appendChild(li);
    });
    title.textContent = `오늘 총 주문 개수: ${total_rows}개`;
  } catch (err) {
    console.error();
  }
}

// 데이터 변경 시 화면 업데이트
async function refreshPage() {
  const orderList = document.getElementById('order-list');
  const title = document.getElementById('title');
  try {
    const { total_rows, rows } = await remoteDB.allDocs();
    orderList.innerHTML = '';
    rows.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.id;
      orderList.appendChild(li);
    });
    title.textContent = `오늘 총 주문 개수: ${total_rows}개`;
  } catch (err) {
    console.error(err);
  }
}

// Create
async function addNewDoc() {
  const doc = generateNewOrder();
  try {
    // post는 _id를 자동으로 생성
    const response = await localDB.post(doc, {
      _rev: doc._rev,
    });
    console.log('새로운 주문: ', response);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Read
async function getDoc(docId) {
  try {
    const doc = await localDB.get(docId, {
      // rev: '...', // 문서의 특정 버전 가져오기
      // revs, // 문서 개정 내역 포함
      // revs_info, // 유효성을 포함한 문서 개정 내역
      // attachments, // 첨부 데이터 포함
      // binary, // Return attachment data as Blobs/Buffers
    });
    return doc;
  } catch (err) {
    console.error(err);
  }
}

// Read all
async function getDocs() {
  try {
    const response = await localDB.allDocs();
    return response;
  } catch (err) {
    console.error(err);
  }
}

// Update
async function updateDoc(docId, newData) {
  try {
    const doc = await localDB.get(docId);
    const response = await localDB.put({
      ...newData,
      _rev: doc._rev,
      // _deleted: true // 문서 삭제
    });
    console.log('데이터 업데이트:', response);
  } catch (err) {
    console.error(err);
  }
}

// Delete
async function removeDoc(docId) {
  try {
    const doc = await localDB.get(docId);
    const response = await localDB.remove(doc);
  } catch (err) {
    console.error(err);
  }
}

// (예시) 여러 Doc 제어
async function manageDocs() {
  const docs = [
    { title: 'Lisa Says', _id: 'doc1' },
    { title: 'Space Oddity', _id: 'doc2' },
  ];
  try {
    const response = await db.bulkDocs(docs);
    return response;
  } catch (err) {
    console.log(err);
  }
}

// 임시 주문 데이터
function generateNewOrder() {
  return {
    // _id: new Date().toISOString(),
    time: Date.now(),
    storeCode: '65372c3c0df256000102683b',
    tableId: '101',
    tableName: '21',
    orderInfo: [
      {
        pos_code: 'C00005',
        good_qty: 1,
        order_options: [
          {
            pos_code: 'C00003',
            good_qty: 1,
          },
        ],
      },
    ],
  };
}

// 로컬 데이터베이스 삭제
async function removeLocalDB(database) {
  try {
    await database.destroy();
  } catch (err) {
    console.error(err);
  }
}

init();
