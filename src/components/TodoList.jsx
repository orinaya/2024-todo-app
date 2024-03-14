import { useState } from 'react'
import Todo from './Todo'
import { useDisclosure } from '@nextui-org/react'
import AddTodoModal from './AddTodoModal'

function TodoList ({ todos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, settodoToEdit] = useState()

  const handleOpenEditModal = (todo) => {
    settodoToEdit(todo)
    onOpen()
  }

  return (
    <>
      <div className='flex flex-wrap lg:flex-row gap-4 py-8 px-5'>
        {

    todos.map((todo) => {
      return (
        <Todo
          key={todo._id}
          title={todo.title}
          description={todo.description}
          openEditModal={handleOpenEditModal}
          todo={todo}
        />
      )
    })
  }

      </div>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        todoToEdit={todoToEdit}
      />
    </>
  )
}

export default TodoList
