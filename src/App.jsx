import NavBar from "./component/NavBar"
import Header from "./component/Header"
import Feature from "./component/Feature"
import HowItWork from "./component/HowItWork"
import Experience from "./component/Experience"
import Account from "./component/Account"
import Footer from "./component/Footer"
import { Element } from 'react-scroll';


function App() {
  
  return (
    <>
    <NavBar />
    <Header />
    <Element name="feature">
        <Feature />
    </Element>

    <Element name="about">
         <HowItWork />
    </Element>
          
      <Experience />
      <Element name="contact">
          <Account />
      </Element>
      
      <Footer />
    </>
  )
}

export default App
