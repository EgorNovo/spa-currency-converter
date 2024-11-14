import { createBrowserRouter } from "react-router-dom";
import Layout from '../../widgets/layout/Layout';
import Base from '../../pages/base/base'
import Currency from '../../pages/currency/currency'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Base />
      },
      {
        path: '/currency',
        element: <Currency />
      }
    ]
  }
]);

export default router;