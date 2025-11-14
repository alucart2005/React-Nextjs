import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './componentes/Home.jsx'
import { List } from './componentes/List.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Tx } from './componentes/tx.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route index element={<h1>Inicio</h1>} />
            <Route path='*' element={<h2>ruta no valida</h2>}/>
            <Route path='/productos' element={<h2>desde productos</h2>}/>
            <Route path='/clientes' element={<h2>desde clientes</h2>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/tx' element={<Tx/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  </StrictMode>,

)
