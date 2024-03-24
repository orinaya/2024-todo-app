import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHooks'
import { useAuth } from '../hooks/authHooks'
import { LuCalendarDays } from 'react-icons/lu'
import { Chip, Link } from '@nextui-org/react'
import LevelCard from '../components/LevelCard'
import { PiArchiveDuotone } from 'react-icons/pi'
import Clock from '../components/Clock'

function Todos () {
  const { todos } = useTodos()
  const { authData } = useAuth()

  const currentDate = new Date().toLocaleDateString()

  const todosToDo = todos.filter(todo => todo.status[0] === 'TODO')
  const todosInProgress = todos.filter(todo => todo.status[0] === 'IN-PROGRESS')
  const todosDone = todos.filter(todo => todo.status[0] === 'DONE')

  return (
    <>
      <div className='container flex flex-col gap-16 mx-auto px-4'>
        <div>
          <span
            className='flex gap-2 items-center font-semibold bg-zinc-200 text-neutral-500 w-fit rounded-2xl px-3 py-1'
          ><LuCalendarDays />{currentDate} -<Clock />
          </span>
          <h1 className='text-lg font-light'>Bonjour, <span className='text-2xl font-semibold'>{authData._user.firstName} {authData._user.lastName}</span> </h1>
        </div>
        <div className='lg:flex gap-20'>
          <LevelCard progressPercentage={(todosDone.length * 10)} todosDone={todosDone.length} />
          <div className='flex flex-col justify-between'>
            <h2 className='font-bold text-xl my-4'>Actions rapides</h2>
            <div className='flex gap-6'>
              <div>
                <AddTodo />
              </div>
              <div>
                <Link to='/archived' className='bg-violet-200 hover:bg-violet-300 flex gap-2 justify-center items-center px-6 py-4 cursor-pointer border-solid border-2 border-violet-300 rounded-lg'>
                  <PiArchiveDuotone size={26} className='text-violet-600' />
                  <h3 className='font-bold text-lg'>Tâches archivées</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:flex lg:justify-between'>
          <div>
            <div className='flex gap-2'>
              <h2 className='font-bold text-xl'>À faire</h2>
              <Chip color='danger' variant='flat' className='rounded-md font-bold'>{todosToDo.length}</Chip>
            </div>
            <TodoList todos={todosToDo} />
          </div>

          <div>
            <div className='flex gap-2'>
              <h2 className='font-bold text-xl'>En cours</h2>
              <Chip color='primary' variant='flat' className='rounded-md font-bold'>{todosInProgress.length}</Chip>
            </div>
            <TodoList todos={todosInProgress} />
          </div>

          <div>
            <div className='flex gap-2'>
              <h2 className='font-bold text-xl'>Terminées</h2>
              <Chip color='success' variant='flat' className='rounded-md font-bold'>{todosDone.length}</Chip>
            </div>
            <TodoList todos={todosDone} />
          </div>
        </div>
        <AddTodo addButton />
      </div>

    </>
  )
}

export default Todos
