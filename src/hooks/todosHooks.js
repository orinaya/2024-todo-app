import { useCallback, useEffect, useState } from 'react'
import { apiAddTodo, apiDeleteTodo, apiGetTodos, apiGetTodosArchived, apiUpdateTodo } from '../services/Api'
import { useBetween } from 'use-between'
import { useAuth } from './authHooks'

function useTodos () {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { authData } = useAuth()
  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodos()
      setTodos(todosData)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const getDataArchived = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodosArchived()
      setTodos(todosData)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const addTodo = useCallback(async (todo) => {
    try {
      setLoading(true)
      const todosData = await apiAddTodo(todo)
      setTodos(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const updateTodo = useCallback(async (todo) => {
    try {
      setLoading(true)
      const todosData = await apiUpdateTodo(todo)
      setTodos(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const deleteTodo = useCallback(async (id) => {
    try {
      setLoading(true)
      const todosData = await apiDeleteTodo(id)
      setTodos(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [authData])

  return {
    todos,
    loading,
    error,
    getData,
    addTodo,
    updateTodo,
    deleteTodo,
    getDataArchived
  }
}

const useTodosSharable = () => useBetween(useTodos)
export { useTodosSharable as useTodos }
