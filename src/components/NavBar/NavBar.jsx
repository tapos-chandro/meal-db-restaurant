import { NavLink } from 'react-router'
import logo from '../../assets/logo-small.png'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className='container flex justify-between px-5 py-5 mx-auto'>
        <div>
          <button>
            <img src={logo} alt='' />
          </button>
        </div>
        <div>
            {/* <nav>
                <ul>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </ul>
            </nav> */}
        </div>
        <div>
          <button className='font-bold bg-yellow-500 btn'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
