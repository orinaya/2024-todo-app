import './App.css'
import TodoList from './components/TodoList'
import { useEffect, useState } from 'react'
import { addTodo, getTodos, deleteTodo, updateTodo } from './services/Api'
import AddTodo from './components/AddTodo'

function App () {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }

    getData()
  }, [])

  const handleAddTodo = async (todo) => {
    const todosData = await addTodo(todo)
    setTodos(todosData)
  }

  const handleUpdateTodo = async (todo) => {
    const todosData = await updateTodo(todo)
    setTodos(todosData)
    console.log(todo)
  }

  const handleDeleteTodo = async (todoId) => {
    const todosData = await deleteTodo(todoId)
    setTodos(todosData)
    console.log(todoId)
  }
  return (
    <>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
      <AddTodo
        onAddTodo={handleAddTodo}
      />
    </>
  )
}

export default App
