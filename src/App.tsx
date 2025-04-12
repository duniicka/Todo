import './index.css'
import ROUTER from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(ROUTER);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
