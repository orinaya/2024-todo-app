import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHooks'
import { useAuth } from '../hooks/authHooks'
import { LuCalendarDays } from 'react-icons/lu'
import { Chip } from '@nextui-org/react'
import LevelCard from '../components/LevelCard'

function Todos () {
  const { todos } = useTodos()
  const { authData } = useAuth()

  const currentDate = new Date().toLocaleDateString()

  const todosToDo = todos.filter(todo => todo.status[0] === 'TODO')
  const todosInProgress = todos.filter(todo => todo.status[0] === 'IN-PROGRESS')
  const todosDone = todos.filter(todo => todo.status[0] === 'DONE')

  return (
    <>
      <div className='container flex flex-col gap-8 mx-auto px-4'>
        <div>
          <span
            className='flex gap-2 items-center font-semibold bg-zinc-200 text-neutral-500 w-fit rounded-2xl px-3 py-1'
          ><LuCalendarDays />{currentDate}
          </span>
          <h1 className='text-lg font-light'>Bonjour, <span className='text-2xl font-semibold'>{authData._user.firstName} {authData._user.lastName}</span> </h1>
        </div>
        <LevelCard progressPercentage={(todosDone.length * 10)} todosDone={todosDone.length} />
        <div>
          <h2 className='font-bold text-xl'>Actions rapides</h2>
          <div className='flex gap-2'>
            <AddTodo />
          </div>
        </div>

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
        <AddTodo addButton />
      </div>
    </>
  )
}

export default Todos
