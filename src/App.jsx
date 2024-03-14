import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import NavbarBabruh from './components/NavbarBabruh'

function App () {
  return (
    <>
      <NavbarBabruh />
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Todos />} />
          <Route index path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
