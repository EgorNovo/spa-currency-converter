import { createBrowserRouter } from "react-router-dom";
import Layout from '../../widgets/layout/Layout';
import Base from '../../pages/base/ui/base'
import Currency from '../../pages/currency/ui/currency'


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
        path: '/ratio',
        element: <Currency />
      }
    ]
  }
]);

export default router;