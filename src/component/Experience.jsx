import '../assets/css/Experience.css'
import ViewsImg from '../assets/image/views.jpg'
import ViewsImages from '../assets/image/views2.jpg'
import Stars from '../assets/image/star.png'

function Experience() {
  return (
    <>
    <section className='views-section'>
        <div className='container d-flex flex-lg-row flex-sm-column p-5 gap-5 views align-items-center'>
            <div className='views-header'>
                <h1>What Our Users Say</h1>
                <p>Real feedback from users.</p>
            </div>
            <div className='d-flex flex-lg-row flex-sm-column views-body gap-4'>
                <div className='views-content'>
                    <img src={ViewsImg} alt="" className='views-img'/>
                    <span className='me-3'>Temmy O.</span>
                    <img src={Stars} alt="" />
                    <p>This app has changed the way I cook</p>
                    
                </div>
                <div className='views-content'>
                    <img src={ViewsImages} alt="" className='views-img'/>
                    <span className='me-3'>Kolade O.</span>
                    <img src={Stars} alt="" />
                    <p>I love  the recipe and how easy it's to follow!</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Experience
