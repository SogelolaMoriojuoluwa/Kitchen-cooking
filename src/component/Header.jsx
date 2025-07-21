import '../assets/css/Header.css'
import HeaderImg from '../assets/image/Header.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>
 
    <div className='header-section'>
        <img src={HeaderImg} alt="" className='header-img'/>
     <div className='container header-overlay d-flex flex-column justify-content-center align-items-start'>
      <div>
      <h1 className='mb-3'>Simplify cooking, Wellness and Time, All in one App</h1>
      <p className='mb-3'>Get personialized recipes, plan tasks and stay healthy.</p>
      <Link to='/dashboard'>
        <button className='btn header-btn'>
        Get Started
       </button>
      </Link>
       
      </div>
     
      
     </div>
    </div>
  
   </>
  )
}

export default Header
