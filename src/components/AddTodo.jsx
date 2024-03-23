import { Button, useDisclosure } from '@nextui-org/react'
import AddTodoModal from './AddTodoModal'
import { FiCheckCircle } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'

function AddTodo ({ onAddTodo, addButton }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      {
        addButton
          ? (
            <Button
              className='fixed bottom-8 right-8 w-12 h-12 z-10'
              color='primary'
              radius='full'
              variant='shadow'
              isIconOnly
              onClick={onOpen}
              onAddTodo={onAddTodo}
            >
              <FaPlus color='white' size={20} />
            </Button>
            )
          : (
            <div
              onClick={onOpen}
              onAddTodo={onAddTodo}
              className='bg-violet-200 hover:bg-violet-300 flex gap-2 justify-center items-center px-6 py-4 cursor-pointer border-solid border-2 border-violet-300 rounded-lg'
            >
              <FiCheckCircle size={26} className='text-violet-600' />
              <h3 className='font-bold text-lg'>Ajouter une tâche</h3>
            </div>
            )
    }

      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onAddTodo={onAddTodo}
      />
    </>
  )
}

export default AddTodo
