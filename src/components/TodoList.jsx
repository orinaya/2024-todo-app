import Todo from './Todo'

function TodoList ({ todos }) {
  return (
    <div className='flex flex-col lg:flex-row gap-4 py-8 px-5'>
      {

    todos.map((todo) => {
      return (
        <Todo
          key={todo.title}
          title={todo.title}
          description={todo.description}
        />
      )
    })
  }
    </div>
  )
}

export default TodoList
