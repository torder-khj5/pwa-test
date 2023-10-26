import GlobalStyles from '@styles/globals';
import router from './router';
import Provider from './Provider';
import { RouterProvider } from 'react-router-dom';

function App() {
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
