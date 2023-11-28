import GlobalStyles from '@styles/globals';
import router from './router';
import Provider from './Provider';
import { RouterProvider } from 'react-router-dom';
import find from 'pouchdb-find';
import PouchDB from 'pouchdb';

function App() {
  PouchDB.plugin(find);
  return (
    <>
      <GlobalStyles />
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
