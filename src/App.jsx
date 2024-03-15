import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import NavbarBabruh from './components/NavbarBabruh'
import ProtectedRoutes from './components/ProtectedRoutes'
// import CustomNavbar from './components/CustomNavbar'

function App () {
  return (
    <>
      <NavbarBabruh />
      {/* <CustomNavbar /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route index path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
