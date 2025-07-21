import NavBar from "../component/NavBar"
import Footer from '../component/Footer'
import Account from '../component/Account'
import NewImg from '../assets/image/news.jpg'
import '../assets/css/NewsPage.css'


function NewsPage() {
  return (
   <>
   <NavBar/>
   <div className='news-container'>
    <img src={NewImg} alt="" />
    <div className='container d-flex flex-column justify-content-center align-items-start news-content'>
      <h1>Simplify your Cooking, Wellness and Time All in One App</h1>
      <p>Get personalized recipe, plan tasks and stay healthy.</p>
      <button className='btn'>
        Start Cooking Smarter
      </button>
    </div>
   </div>
   <Account />
   <Footer />
   </>
  )
}

export default NewsPage
