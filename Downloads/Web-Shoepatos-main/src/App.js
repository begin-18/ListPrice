
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import LandingPage from './components/LandingPage'
import Update from './components/Update'
import NewProduct from './components/NewProduct'
import SliderComponent from './components/SliderComponent'
import Feedback from './components/Feedback'
import Brand from './components/Brand'

function App() {
  return (
    <>
    <Header />
    <SliderComponent/>
    <LandingPage />
    <Update/>
    <NewProduct/>
    <Feedback/>
    {/* <Brand/> */}
    <Footer />

    </>
  )
}

export default App
