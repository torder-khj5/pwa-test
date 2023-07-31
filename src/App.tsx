import router from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <div id="modal-root"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
