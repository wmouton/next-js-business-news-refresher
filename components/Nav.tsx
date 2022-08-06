import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import navLogo from '../public/next.svg'
import { NextPage } from 'next'

const Nav: NextPage = () => {
  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.navImg}>
        <Image src={navLogo} />
        </div>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/features'>Features</Link>
          </li>
          <li>
            <Link href='/pricing'>Pricing</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav