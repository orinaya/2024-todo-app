import { Button } from '@nextui-org/react'
import './App.css'
// import Clock from './components/Clock'
import TodoList from './components/TodoList'

const todos = [
  {
    title: 'Prout 1',
    description: 'lorem prout'
  },
  {
    title: 'Prout 2',
    description: 'lorem prout'
  },
  {
    title: 'Prout 3',
    description: 'lorem prout'
  },
  {
    title: 'Prout 4',
    description: 'lorem prout'
  }]

function App () {
  return (
    <>
      <TodoList todos={todos} />
      <Button variant='flat' color='primary'>Mon bouton</Button>
      {/* <Clock interval={10} /> */}
    </>
  )
}

export default App
