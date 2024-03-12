import axios from 'axios'

const API_URL = 'http://localhost:3000'

async function getTodos () {
  const todos = await axios.get(API_URL + '/todos')
  return todos.data
}

async function addTodo (todo) {
  const response = await axios.post(API_URL + '/todos', todo)
  console.log(response)
}

export {
  getTodos,
  addTodo
}
