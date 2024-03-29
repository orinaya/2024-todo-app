import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import Navbar from './components/interface/Navbar'
import ProtectedRoutes from './components/ProtectedRoutes'
import Archived from './pages/Archived'

function App () {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
            <Route index path='/archived' element={<Archived />} />
          </Route>
          <Route index path='/auth' element={<Auth />} />
          <Route index path='/signup' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
