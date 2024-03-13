import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
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
