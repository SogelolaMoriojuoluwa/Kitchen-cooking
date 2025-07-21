import '../assets/css/Footer.css'
import IconFirst from '../assets/image/icon1.svg'
import IconSecond from '../assets/image/icon2.svg'
import IconThird from '../assets/image/icon3.svg'
import IconFourth from '../assets/image/icon4.svg'
import IconFifth from '../assets/image/icon5.svg'

function Footer() {
  return (
    <>
    <div className='container p-5'>
        <div className='d-flex flex-lg-row flex-sm-column align-items-center justify-content-center gap-4 footer-content'>
            <p>Privacy and Policy</p>
            <p>Terms of ervices</p>
            <p>Contact Us</p>
            <p>Follow us on Social Media</p>
        </div>
        <div className='d-flex justify-content-center gap-2 mt-3'>
            <img src={IconFirst} alt="" />
            <img src={IconSecond} alt="" />
            <img src={IconThird} alt="" />
            <img src={IconFourth} alt="" />
            <img src={IconFifth} alt="" />
        </div>
    </div>
    </>
  )
}

export default Footer
