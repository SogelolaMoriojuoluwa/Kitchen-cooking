import SignImg from '../assets/image/signimg.jpg'
import '../assets/css/SignUp.css'

function SignUp() {
  return (
   <>
   
     <div className='row'>
      <div className='col-6 sign-img'>
        <img src={SignImg} alt="" />
      </div>
      <div className='col-6'>
       <div>
        <div>
          {/* <input type="email" className='form-control'/> */}
        </div>
        <div>
          {/* <input type="text" className='form-control'/> */}
        </div>
        <div>
          {/* <button>
            Login
          </button> */}
        </div>
       </div>
      </div>
    </div>
   
   </>
  )
}

export default SignUp
