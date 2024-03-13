import { useState } from 'react'
import Todo from './Todo'
import { useDisclosure } from '@nextui-org/react'
import AddTodoModal from './AddTodoModal'

function TodoList ({ todos, onAddTodo, onDeleteTodo, onUpdateTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, settodoToEdit] = useState()

  const handleOpenEditModal = (todo) => {
    settodoToEdit(todo)
    onOpen()
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-4 py-8 px-5'>
        {

    todos.map((todo) => {
      return (
        <Todo
          key={todo._id}
          title={todo.title}
          description={todo.description}
          onDeleteTodo={onDeleteTodo}
          todoId={todo._id}
          openEditModal={handleOpenEditModal}
          todo={todo}
          todoToEdit={todoToEdit}
          onAddTodo={onAddTodo}
        />
      )
    })
  }

      </div>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onUpdateTodo={onUpdateTodo}
        todoToEdit={todoToEdit}
        onAddTodo={onAddTodo}
      />
    </>
  )
}

export default TodoList
