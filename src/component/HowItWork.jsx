import '../assets/css/HowItWork.css'
import WorkFirst from '../assets/image/work1.jpg'

function HowItWork() {
  return (
    <>
    <section className='work'>
      <div className='container mb-5'>
        <div className='d-flex flex-column align-items-center py-4 mt-5 work-header mb-3'>
            <h1 className='mb-3'>How it Works</h1>
            <button className='btn'>View all recipe</button>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-lg-row flex-sm-column gap-4'>
            <div className='work-content mb-3'>
                  <img src={WorkFirst} alt="" />
                  <div className='tag'>
                    <span>Highly Rated</span>
                  </div>
                <div className='work-word'>
                  <p>Nigerian Jollof Rice</p>
                <h5>A spicy, tasty rice dish.</h5>
                </div>
            </div>
            <div className='work-content mb-3'>
                  <img src={WorkFirst} alt="" />
                  <div className='tag'>
                    <span>Highly Rated</span>
                  </div>
                <div className='work-word'>
                  <p>Healthy Salad Bowl</p>
                <h5>Fresh and nutritious</h5>
                </div>
            </div>
            <div className='work-content mb-3'>
                  <img src={WorkFirst} alt="" />
                  <div className='tag'>
                    <span>Highly Rated</span>
                  </div>
                    <div className='work-word'>
                       <p>Hearty Vegetable Soup</p>
                      <h5>Perfect for a light meal.</h5>
                    </div>
            </div>
        </div>
    </div>
    </section>
    
    
    </>
  )
}

export default HowItWork
