import { useState } from 'react'
import Todo from './Todo'
import { useDisclosure } from '@nextui-org/react'
import AddTodoModal from './AddTodoModal'

function TodoList ({ todos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, settodoToEdit] = useState()
  // const [loading, setLoading]= useS

  const handleOpenEditModal = (todo) => {
    settodoToEdit(todo)
    onOpen()
  }

  if (!todos || todos.length < 1) {
    return (
      <div className='container w-full flex items-center justify-center py-6'>
        <h2 className='font-semibold text-xl'>Il n'y a aucune tâche gros nul ඞ</h2>
      </div>
    )
  }
  return (
    <>
      <div className='flex flex-wrap lg:flex-row gap-4 py-8'>
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
