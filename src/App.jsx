import './App.css'
// import Clock from './components/Clock'
import TodoList from './components/TodoList'
import { useEffect, useState } from 'react'
import { addTodo, getTodos } from './services/Api'
import AddTodo from './components/AddTodo'

// const todos = [
//   {
//     title: 'Prout 1',
//     description: 'lorem prout'
//   },
//   {
//     title: 'Prout 2',
//     description: 'lorem prout'
//   },
//   {
//     title: 'Prout 3',
//     description: 'lorem prout'
//   },
//   {
//     title: 'Prout 4',
//     description: 'lorem prout'
//   }]

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
    await addTodo(todo)
  }

  return (
    <>
      <TodoList todos={todos} />
      <AddTodo onAddTodo={handleAddTodo} />
      {/* <Clock interval={10} /> */}
    </>
  )
}

export default App
