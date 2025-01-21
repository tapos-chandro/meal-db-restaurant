import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routers from './components/Routers/Routers.jsx'
import SearchProvider from './SearchProvider/SearchProvider.jsx'

const router = Routers()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router}></RouterProvider>
    </SearchProvider>
  </StrictMode>
)
