import { useAuth } from '../hooks/authHooks'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes () {
  const { authData } = useAuth()

  return (
    authData?.token && authData?._user
      ? <Outlet />
      : <Navigate to='/auth' />
  )
}

export default ProtectedRoutes
