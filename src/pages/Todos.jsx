import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHooks'

function Todos () {
  const { todos } = useTodos()

  return (
    <>
      <TodoList todos={todos} />
      <AddTodo />
    </>
  )
}

export default Todos
