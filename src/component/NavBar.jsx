import '../assets/css/NavBar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-scroll';
// import BrandImage from '../assets/image/Vector.svg'

function NavBar() {
const [isActive, setIsActive] = useState('')

const handleActive= () => {
setIsActive(isActive)
}

  return (
    <>
    <nav className="navbar navbar-expand-lg py-3">
  <div className="container">
   <NavLink className='navbar-brand ' to='/'>
       <img src='/logo.svg' alt="" className='nav-logo'/>
   </NavLink>  
     
    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item me-4">
          <NavLink
           className={ isActive === 'home' ? 'nav-link active' : 'nav-link'}
           to='/'
           onClick={handleActive}
          >
               Home
          </NavLink>
         
        </li>
        <li className="nav-item me-4">
           <Link
           className={ isActive === 'features' ? 'nav-link active' : 'nav-link'}
           to='feature'
           onClick={handleActive}
           smooth={true} duration={500}
          >
              Features
          </Link>
          
        </li>
        <li className="nav-item me-4">
           <Link
           className={ isActive === 'about' ? 'nav-link active' : 'nav-link'}
           to='about'
           onClick={handleActive}
           smooth={true} duration={500}
          >
               About
          </Link>
          
        </li>
        <li className="nav-item me-4">
           <NavLink
           className={ isActive === 'task' ? 'nav-link active' : 'nav-link'}
           to='/task'
           onClick={handleActive}
          >
               My Tasks
          </NavLink>
          
        </li>
        <li className="nav-item me-4">
           <NavLink
           className={ isActive === 'news' ? 'nav-link active' : 'nav-link'}
           to='/news'
           onClick={handleActive}
          >
               News & Notes
          </NavLink>
          
        </li>
        <li className="nav-item me-4">
           <Link
           className={ isActive === 'contact' ? 'nav-link active' : 'nav-link'}
           to='contact'
           onClick={handleActive}
           smooth={true} duration={500}
          >
               Contact
          </Link>
          
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control ms-3 nav-search" type="search" placeholder="Search recipe, cooks, tips..." aria-label="Search" readOnly/>
        
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
