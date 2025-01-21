import logo from '../../../src/assets/logo-small.png'

const Footer = () => {
  return (
    <footer className='p-10 rounded footer footer-center bg-base-200 text-base-content'>
      <nav className='grid grid-flow-col gap-4'>
        <a className='link link-hover'><img src={logo} alt="" /></a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  )
}

export default Footer
