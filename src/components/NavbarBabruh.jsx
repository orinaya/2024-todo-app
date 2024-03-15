import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { useState } from 'react'
import { AcmeLogo } from '../components/AcmeLogo'
import { useAuth } from '../hooks/authHooks'

function NavbarBabruh () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { authData, logout } = useAuth()
  const isLoggedIn = authData?.token && authData?._user

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/auth' aria-current='page'>
            Se connecter
          </Link>
        </NavbarItem>
      </NavbarContent>

      {isLoggedIn
        ? (
          <NavbarContent as='div' justify='end'>
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  className='transition-transform'
                  color='secondary'
                  name='Ben Linker'
                  size='sm'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Bonjour, Ben Linker</p>
                </DropdownItem>
                <DropdownItem color='danger' onPress={logout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          )
        : (
          <NavbarContent justify='end'>
            <NavbarItem className='hidden lg:flex'>
              <Link href='#'>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color='primary' href='#' variant='flat'>
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          )}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/'
            size='lg'
          >
            Todos
          </Link>
          <Link
            color='foreground'
            className='w-full'
            href='/auth'
            size='lg'
          >
            Authentification
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>

  )
}

export default NavbarBabruh
