import * as https from 'https';
import { colors } from '@styles/colors.ts';
import * as S from './styles.tsx';
// import PouchDB from 'pouchdb';
import PouchDB from 'pouchdb';

type Img = {
  src: string;
  name: string;
};

export default function HomePage() {
  // const { goods } = useInitSelector(['goods']);

  const proxyServerURL = 'http://localhost:3001';

  async function addData() {
    try {
      const db = new PouchDB('test'); // 로컬 PouchDB 데이터베이스 생성
      // const remoteDB = new PouchDB('https://admin:0000@192.168.0.14:6984/test');
      // const remoteDB = new PouchDB('https://admin:0000@192.168.0.14:6984/test');
      const remoteDB = new PouchDB(proxyServerURL);

      // const instance = axios.create({
      //   baseURL: 'https://admin:0000@192.168.0.14:6984/test',
      //   httpsAgent: new https.Agent({
      //     rejectUnauthorized: false,
      //   }),
      // });
      //
      // const response = await instance.post('/api', { abc: 123 });

      // DB 연결 및 동기화
      db.sync(remoteDB, {
        live: true,
        retry: true,
      });

      db.changes().on('change', (change) => {
        console.log('로컬 데이터베이스 변경 감지:', change);
      });

      // 데이터 추가 (Create)
      const doc = {
        _id: new Date().toISOString(),
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

      const response = await db.put(doc);
      console.log('New data added:', response);

      // 데이터 조회 (Read)
      return await db.get(response.id);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  function handleClickEvent() {
    console.log('handleClick!');
    try {
      addData().then((r) => console.log(r));
    } catch (e) {
      console.log('error: ', e);
    }
  }

  return (
    <S.HomeContainer>
      {/* {goods.map(({ src, name }: Img) => { */}
      {/*  return <ImageCard src={src} key={'key' + name} />; */}
      {/* })} */}
      <button
        onClick={handleClickEvent}
        style={{
          width: '100px',
          height: '40px',
          position: 'absolute',
          top: '150px',
          right: '50%',
          border: `1px solid ${colors.green_key}`,
        }}
      >
        test btn
      </button>
    </S.HomeContainer>
  );
}
