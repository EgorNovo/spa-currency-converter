import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './provider/router'

const App: FC = () => <RouterProvider router={router}></RouterProvider>

export default App;