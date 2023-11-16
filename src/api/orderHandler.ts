import { localDB } from '@api/dbConnect.ts';

// Read all
export async function getDocs() {
  try {
    console.log('read docs');
    return await localDB.allDocs();
  } catch (err) {
    console.error(err);
  }
}
