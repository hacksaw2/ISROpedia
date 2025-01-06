import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Spacecraft from './Spacecraft.jsx'
import Centres from './Centres.jsx'
// import Vehicles from './Satellites.jsx'
import Satellites from './Satellites.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index element={<Satellites/>} />
      <Route path='/spacecraft' element={<Spacecraft/>} />
      <Route path='/centres' element={<Centres/>} />
      <Route path='/satellites' element={<Satellites/>} />



    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
