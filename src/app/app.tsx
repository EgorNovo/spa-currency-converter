import { FC, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './provider/router'
import { UserContext } from './context/context'

const App: FC = () => {
  const [currency, setCurrency] = useState("RUB");
  const [data, setData] = useState({});

  return (
  <UserContext.Provider value={ { currency, setCurrency, data, setData } }>
    <RouterProvider router={router}></RouterProvider>
  </UserContext.Provider>
  )
} 

export default App;