import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHooks'

function LoginForm () {
  const [formData, setformData] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    login(formData)
  }

  return (
    <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit}>
      <Input
        name='email'
        label='Email'
        type='email'
        placeholder='Entrez votre email'
        variant='flat'
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        name='password'
        label='Mot de passe'
        type='password'
        placeholder='Entrez votre mot de passe'
        variant='flat'
        onChange={handleChange}
        value={formData.password}
      />
      <Button type='submit' color='primary'>Se connecter</Button>
    </form>
  )
}

export default LoginForm
