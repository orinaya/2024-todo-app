import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../components/user-form/LoginForm'
import SignUpForm from '../components/user-form/SignUpForm'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'
import SignBackground from '../assets/sign-background.svg'
import PhoneImage from '../assets/phone-mockup.png'
import TodoomLogo from '../assets/todoom-logo.svg'

function Auth () {
  const navigate = useNavigate()
  const { authData } = useAuth()

  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])
  return (
    <div className='container mx-auto flex xl:flex-row items-center max-sm:flex-col max-sm:mt-8'>
      <div style={{ backgroundImage: `url(${SignBackground})` }} className='container mx-4 my-4 w-full flex rounded-xl justify-around h-64'>
        <div className='flex flex-col h-full items-center justify-center w-full'>
          <h1>Bienvenue sur</h1>
          <img src={TodoomLogo} className='bg-white py-1 px-2 rounded-md' />
        </div>
        <img src={PhoneImage} />
      </div>

      {(window.location.pathname === '/signup')
        ? (
          <div className='w-full px-4'>
            <h1>Créer un compte</h1>
            <SignUpForm />
            <Link color='violet' to='/auth'>Retour à la connexion</Link>
          </div>
          )
        : (

          <div className='w-full px-4'>
            <h1>Se connecter</h1>
            <LoginForm />
            <p>Nouveau ? <Link to='/signup'>Créer un compte</Link></p>
          </div>
          )}

    </div>
  )
}

export default Auth
