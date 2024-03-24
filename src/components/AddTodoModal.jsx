import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import TodoForm from './TodoForm'
import { useTodos } from '../hooks/todosHooks'
import { useState } from 'react'

function AddTodoModal ({ todoToEdit, isOpen, onOpen, onOpenChange }) {
  const { addTodo, updateTodo } = useTodos()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (formData, id = null) => {
    setLoading(true)
    if (id) {
      await updateTodo({
        ...formData,
        _id: id
      })
    } else {
      await addTodo(formData)
    }
    setLoading(false)
  }

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
            <ModalHeader className='flex flex-col gap-1'>{todoToEdit ? 'Modifier' : 'Ajouter'} une tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={handleSubmit} todoToEdit={todoToEdit} onClose={onClose} loading={loading} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal
