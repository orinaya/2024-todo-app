import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../../hooks/authHooks'

function SignUpForm () {
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const { createUser } = useAuth()

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    createUser(formData)
  }

  return (
    <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit}>
      <Input
        name='lastName'
        label='Nom'
        type='text'
        placeholder='Entrez votre nom'
        variant='flat'
        onChange={handleChange}
        value={formData.lastName}
      />
      <Input
        name='firstName'
        label='Prénom'
        type='text'
        placeholder='Entrez votre prénom'
        variant='flat'
        onChange={handleChange}
        value={formData.firstName}
      />
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
      <Button type='submit' color='primary' className='text-white font-bold w-fit rounded-lg'>Valider</Button>
    </form>
  )
}

export default SignUpForm
