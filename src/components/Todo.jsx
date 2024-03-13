import { Button, Card, CardHeader, Image } from '@nextui-org/react'

import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaPencilAlt } from 'react-icons/fa'

function Todo ({ openEditModal, onDeleteTodo, todo }) {
  const { title, description, _id } = todo
  return (
    <>

      <Card
        isHoverable
        isPressable
        shadow='none'
        className='flex'
      >
        <CardHeader className='flex gap-3'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width={40}
          />
          <div className='flex flex-col flex-grow'>
            <p className='text-md'>{title}</p>
            <p className='text-small text-default-500'>{description}</p>
          </div>
          <div className='flex'>
            <Button
              isIconOnly
              variant='light'
              onPress={() => openEditModal(todo)}
            >
              <FaPencilAlt color='blue' />
            </Button>
            <Button
              color='danger'
              isIconOnly
              variant='light'
              onPress={() => onDeleteTodo(_id)}
            >
              <RiDeleteBin5Line color='danger' />
            </Button>
          </div>
        </CardHeader>
      </Card>
    </>
  )
}

export default Todo
