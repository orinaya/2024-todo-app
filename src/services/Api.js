import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

async function apiGetTodos () {
  const todos = await axios.get(API_URL + '/todos')
  return todos.data
}

async function apiAddTodo (todo) {
  const response = await axios.post(API_URL + '/todos', todo)
  return response.data
}

async function apiUpdateTodo (todo) {
  const response = await axios.put(API_URL + '/todos', todo)
  return response.data
}

async function apiDeleteTodo (id) {
  const response = await axios.delete(API_URL + '/todos', { data: { id } })
  return response.data
}

async function apiLogin (credentials) {
  const response = await axios.post(API_URL + '/auth/login', credentials)
  return response.data
}

export {
  apiGetTodos,
  apiAddTodo,
  apiUpdateTodo,
  apiDeleteTodo,
  apiLogin
}
