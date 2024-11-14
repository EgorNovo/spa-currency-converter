import { createBrowserRouter } from "react-router-dom";
import Layout from '../../widgets/layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <h1>Main</h1>
      },
      {
        path: '/currency',
        element: <h1>Currency</h1>
      }
    ]
  }
]);

export default router;