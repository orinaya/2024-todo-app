import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin, apiSignUp } from '../services/Api'
import { toast } from 'react-toastify'

function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const login = useCallback(async (credentials) => {
    console.log('login appelé')
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      if (response && response.token && response._user) {
        toast.success('Vous êtes connecté !')
      } else {
        toast.error('L\'email ou le mot de passe renseigné est incorrect')
      }
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setAuthData(null)
  }, [])

  const createUser = async (user, credentials) => {
    console.log('signup appelé')
    try {
      setLoading(true)
      const response = await apiSignUp(user)
      if (response && response.token && response._user) {
        toast.success('Vous êtes connecté !')
      }
      // setLoading(true)
      // const signUpResponse = await apiSignUp(user)
      // if (signUpResponse && signUpResponse.success) {
      //   const loginResponse = await apiLogin(credentials)
      //   setAuthData(loginResponse)
      //   if (loginResponse && loginResponse.token && loginResponse._user) {
      //     toast.success('Vous êtes connecté !')
      //   }
      // }
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    const savedAuth = window.localStorage.getItem('AUTH')
    if (savedAuth) {
      setAuthData(JSON.parse(savedAuth))
    }
  }, [])

  useEffect(() => {
    if (authData) {
      window.localStorage.setItem('AUTH', JSON.stringify(authData))
    } else {
      window.localStorage.removeItem('AUTH')
    }
  }, [authData])

  return { authData, loading, error, login, logout, createUser }
}

const useAuthSharable = () => useBetween(useAuth)

export { useAuthSharable as useAuth }
