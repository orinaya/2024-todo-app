import { Button, Card, CardFooter, CardHeader, Chip, Divider, Image } from '@nextui-org/react'

import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaPencilAlt } from 'react-icons/fa'
import { useTodos } from '../hooks/todosHooks'
import { LuCalendarDays } from 'react-icons/lu'
import Loading from './Loading'
import { useEffect, useState } from 'react'

function Todo ({ openEditModal, todo, importantChip }) {
  const { title, description, _id, important, endDate } = todo
  const { deleteTodo } = useTodos()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const endDateTime = new Date(endDate)
  const hours = endDateTime.getHours()
  const minutes = endDateTime.getMinutes()

  const formattedEndTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  const formattedEndDate = new Date(endDate).toLocaleDateString()

  return (
    <>
      {loading

        ? <Loading />
        : (

          <Card
            isHoverable
            shadow='none'
            className='flex px-4 py-1 w-full bg-yellow-50 hover:bg-yellow-200 rounded-xl'
            variant='flat'
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
                <p className='text-md font-bold'>{title}</p>
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
                  onPress={() => deleteTodo(_id)}
                >
                  <RiDeleteBin5Line color='danger' />
                </Button>
              </div>
            </CardHeader>
            <Divider />
            <CardFooter className='flex justify-between'>
              <span
                className='flex gap-2 items-center font-semibold'
              ><LuCalendarDays /> {formattedEndDate} - {formattedEndTime}
              </span>
              {important
                ? (
                  <Chip color='danger' variant='flat'>Important</Chip>
                  )
                : (
                  <Chip color='success' variant='flat'>Normal</Chip>
                  )}
            </CardFooter>

          </Card>
          )}
    </>
  )
}

export default Todo
