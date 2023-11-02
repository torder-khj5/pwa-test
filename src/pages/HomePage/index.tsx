import { colors } from '@styles/colors.ts';
import * as S from './styles.tsx';
import PouchDB from 'pouchdb';

type Img = {
  src: string;
  name: string;
};

export default function HomePage() {
  // const { goods } = useInitSelector(['goods']);
  const handleClickEvent = () => {
    console.log('handleClick!');
    try {
      // const db = new PouchDB('http://192.168.20.227:5984/dbname');
      const db = new PouchDB('test'); // 로컬 PouchDB 데이터베이스 생성
      const remoteDB = new PouchDB('http://admin:0000@192.168.0.16:5984/test');

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
        title: 'local test',
        content: 'This is some content.',
      };

      db.put(doc)
        .then(async (response: any) => {
          console.log('New data added:', response);
          // 데이터 조회 (Read)
          return await db.get(response.id);
        })
        .catch((error: any) => {
          console.error('Error:', error);
        });
    } catch (e) {
      console.log('error: ', e);
    }
  };

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
