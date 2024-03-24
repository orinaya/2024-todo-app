import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
})

api.interceptors.request.use(function (config) {
  const savedAuth = window.localStorage.getItem('AUTH')
  if (savedAuth) {
    const auth = JSON.parse(savedAuth)
    const { token } = auth
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
})

async function apiGetTodos () {
  const todos = await api.get('/todos')
  return todos.data
}

async function apiGetTodosArchived () {
  const todos = await api.get('/archived')
  return todos.data
}

async function apiAddTodo (todo) {
  const response = await api.post('/todos', todo)
  return response.data
}

async function apiUpdateTodo (todo) {
  const response = await api.put('/todos', todo)
  return response.data
}

async function apiDeleteTodo (id) {
  const response = await api.delete('/todos', { data: { id } })
  return response.data
}

async function apiLogin (credentials) {
  const response = await api.post('/auth/login', credentials)
  return response.data
}

async function apiSignUp (user) {
  const response = await api.post('/signup', user)
  return response.data
}

export {
  apiGetTodos,
  apiAddTodo,
  apiUpdateTodo,
  apiDeleteTodo,
  apiLogin,
  apiSignUp,
  apiGetTodosArchived
}
