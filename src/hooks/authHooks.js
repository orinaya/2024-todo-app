import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin } from '../services/Api'

function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      console.log('coucou', response)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setAuthData(null)
    window.localStorage.clear()
  }, [])

  useEffect(() => {
    const savedAuth = window.localStorage.getItem('AUTH')
    if (savedAuth) {
      setAuthData(JSON.parse(savedAuth))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(authData))
  }, [authData])

  return { login, logout, authData, loading, error }
}

const useAuthSharable = () => useBetween(useAuth)
export { useAuthSharable as useAuth }
