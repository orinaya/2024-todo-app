import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from '@nextui-org/react'
import { useState } from 'react'
import { AcmeLogo } from '../components/AcmeLogo'

function NavbarBabruh () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
          {/* <p className='font-bold text-inherit'>TO DOOM</p> */}
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
            Authentification
          </Link>
        </NavbarItem>
      </NavbarContent>

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
