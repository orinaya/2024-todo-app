import { Button } from '@nextui-org/react'
import './App.css'
import Clock from './components/Clock'

function App () {
  return (
    <>
      <Button variant='flat' color='primary'>Mon bouton</Button>
      <Clock interval={10} />
    </>
  )
}

export default App
