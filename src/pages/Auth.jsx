import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../components/user-form/LoginForm'
import SignUpForm from '../components/user-form/SignUpForm'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'
import SignBackground from '../assets/sign-background.svg'
import PhoneImage from '../assets/phone-mockup.png'
import TodoomLogo from '../assets/todoom-logo.svg'
import { IoMdArrowRoundBack } from 'react-icons/io'

function Auth () {
  const navigate = useNavigate()
  const { authData } = useAuth()

  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])
  return (
    <div className='container mx-auto flex xl:flex-row items-center max-sm:flex-col max-sm:mt-8 my-20 '>
      <div style={{ backgroundImage: `url(${SignBackground})` }} className='container mx-4 my-4 w-full flex rounded-xl justify-around h-80 lg:h-screen lg:items-center pr-14'>
        <div className='flex flex-col h-full items-center justify-center w-full gap-4 lg:h-full'>
          <h1 className='text-white font-bold text-3xl'>Bienvenue sur</h1>
          <img src={TodoomLogo} className='bg-white py-1 px-2 rounded-md h-14 ' />
        </div>
        <img src={PhoneImage} className='lg:object-cover lg:h-4/5' />
      </div>

      {(window.location.pathname === '/signup')
        ? (
          <div className='w-full px-4 flex flex-col gap-12'>
            <h1 className='text-2xl font-bold'>Créer un compte</h1>
            <SignUpForm />
            <Link to='/auth' className='bg-violet-200 text-violet-700 py-2 px-6 rounded-lg w-fit flex gap-2 justify-center items-center'>
              <IoMdArrowRoundBack />Retour à la connexion
            </Link>
          </div>
          )
        : (

          <div className='w-full px-4 flex flex-col gap-12'>
            <h1 className='text-2xl font-bold'>Se connecter</h1>
            <LoginForm />
            <p>Nouveau ? <Link to='/signup' className='text-violet-600 font-bold'>Créer un compte</Link></p>
          </div>
          )}

    </div>
  )
}

export default Auth
