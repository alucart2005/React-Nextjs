import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<p>Hola home - desde el home</p>}/>
          <Route path='/by' element={<p>Adios by  - desde el by</p>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
