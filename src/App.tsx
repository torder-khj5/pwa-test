import GlobalStyles from '@styles/globals';
import { usePouchDBSelector, usePouchDBStore } from '@store/usePouchDBStore.ts';
import router from './router';
import Provider from './Provider';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  // const { localDB, remoteDB } = usePouchDBSelector(['localDB', 'remoteDB']);
  //
  // useEffect(() => {
  //   localDB
  //     .sync(remoteDB, {
  //       live: true,
  //       retry: true,
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-expect-error
  //       include_docs: true,
  //     })
  //     .on('complete', (info) => {
  //       console.log('Sync completed:', info);
  //     })
  //     .on('error', (err) => {
  //       console.error('Sync error:', err);
  //     });
  // }, []);

  return (
    <>
      <GlobalStyles />
      <Provider {...usePouchDBStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
