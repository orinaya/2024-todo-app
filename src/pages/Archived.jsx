import { Chip } from '@nextui-org/react'
import TodoList from '../components/TodoList'
import { useTodos } from '../hooks/todosHooks'

function Archived () {
  const { todos } = useTodos()
  const todosArchived = todos.filter(todo => todo.status[0] === 'ARCHIVED')

  return (

    <div>
      <div className='flex gap-2'>
        <h2 className='font-bold text-xl'>À faire</h2>
        <Chip color='danger' variant='flat' className='rounded-md font-bold'>{todosArchived.length}</Chip>
      </div>
      <TodoList todos={todosArchived} />
    </div>
  )
}

export default Archived
