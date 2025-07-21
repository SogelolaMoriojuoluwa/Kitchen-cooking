import NavBar from "../component/NavBar"
import Footer from '../component/Footer'
import '../assets/css/DashBoard.css'

function DashBoard() {
  return (
    
    <section>
      <NavBar />
      <div className="container d-flex flex-column align-item-center p-5 text-center justify-content-center dash-body">
        <div className="dash-head">
          <h1>
            What would you like to cook today?
          </h1>
          <div className="dash-input d-flex justify-content-center">
            <input type="text" className="form-control"  placeholder="Search recipes, cooks, tips..."/>
          </div>
        </div>

      </div>
      <Footer/>
    </section>
    
      
    
  )
}

export default DashBoard
