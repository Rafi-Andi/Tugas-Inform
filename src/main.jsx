import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './page/Home.jsx'
import { KeranjangContextProvider, KeranjangContext } from './context/keranjangContext.jsx'
import Chart from './page/ShopingChart.jsx'

const router = createBrowserRouter ([
  {
      path: "/",
      element: <HomePage/>,
  },
  {
    path: "/chart",
    element: <Chart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KeranjangContextProvider>
    <RouterProvider router={router} />
    </KeranjangContextProvider>
  </StrictMode>
)
