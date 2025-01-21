import { Link, NavLink } from 'react-router'
import logo from '../../assets/logo-small.png'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className='container flex items-center justify-between px-5 py-5 mx-auto'>
        <div className='w-1/2 '>
          <Link to={'/'} >
            <img src={logo} alt='' />
          </Link>
        </div>
        <div>
          <button className='font-bold bg-yellow-500 btn'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
