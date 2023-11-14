// db.js
import PouchDB from 'pouchdb';

const localDB = new PouchDB('test'); // 로컬 PouchDB 데이터베이스 생성
const remoteDB = new PouchDB('http://admin:0000@192.168.101.6:6984/test');

export async function syncDB() {
  try {
    const syncOptions = {
      live: true,
      retry: true,
    };

    localDB.sync(remoteDB, syncOptions);
    localDB.changes().on('change', (change) => {
      console.log('로컬 데이터베이스 변경 감지:', change);
    });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function addData(data: any) {
  try {
    const response = await localDB.put(data);
    console.log('New data added:', response);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getData(id: string) {
  try {
    return await localDB.get(id);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
