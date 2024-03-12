import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import TodoForm from './TodoForm'

function AddTodoModal ({ isOpen, onOpen, onOpenChange, onAddTodo }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='xl'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Ajouter une tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={onAddTodo} />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Fermer
              </Button>
              <Button color='primary' onPress={onClose}>
                Ajouter
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal
