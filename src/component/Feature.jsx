import '../assets/css/Feature.css'
import FeatureFirst from '../assets/image/feature1.png'
import FeatureSecond from '../assets/image/feature2.png'
import FeatureThird from '../assets/image/feature3.png'
import FeatureFour from '../assets/image/feature4.png'



function Feature() {
  return (
   <>
   <div className="container d-flex flex-column align-items-center justify-content-center feature-header">
    <div className="d-flex flex-column align-items-center feature-content mt-5">
        <h1>Core Features</h1>
        <p>Discover how we can help make cooking easier and healthier.</p>
        <button className='btn'>Explore Features</button>
    </div>
    <div className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center gap-5">
        <div className="d-flex feature-card gap-3 mb-4">
            <img src={FeatureFirst} alt="" />
            <div>
                <h4>Smart Cooking Mode</h4>
                <p>Input ingredient and get personlized recipes.</p>
                <button className='btn'>Cooking Made Easy </button>
            </div>
            
        </div>
        <div className="d-flex feature-card gap-3 mb-4">
             <img src={FeatureSecond} alt="" />
            <div>
                <h4>Interactive Cooking Checklist</h4>
                <p>Stay orginized with step-by-step tasks.</p>
                <button className='btn'>Grab a Checklist </button>
            </div>
        </div>
    </div>
    <div className="d-flex flex-lg-row flex-sm-column align-items-center justify-content-center gap-5">
        <div className="d-flex feature-card gap-3 mb-4">
             <img src={FeatureThird} alt="" />
            <div>
                <h4>My Task Plan</h4>
                <p>Plan daily tasks in time blocks.</p>
                <button className='btn'>Join the Community.</button>
            </div>
        </div>
        <div className="d-flex feature-card gap-3 mb-4">
             <img src={FeatureFour} alt="" />
            <div>
                <h4>Time Sync & Smart Planner</h4>
                <p>Schedule and support better time management.</p>
                <button className='btn'>Get time sync with google calender</button>
            </div>
        </div>
    </div>
     
   </div>
   
   
   </>
  )
}

export default Feature
