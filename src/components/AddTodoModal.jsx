import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import TodoForm from './TodoForm'

function AddTodoModal ({ todoToEdit, isOpen, onOpen, onOpenChange, onAddTodo, onUpdateTodo }) {
  const handleSubmit = (formData, id = null) => {
    if (id) {
      // modification
      onUpdateTodo({
        ...formData,
        _id: id
      })
    } else {
      // ajout
      onAddTodo(formData)
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='xl'
      todoToEdit={todoToEdit}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>{todoToEdit ? 'Modifier' : 'Ajouter'} une tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={handleSubmit} todoToEdit={todoToEdit} onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal
