import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Main(props) {

  return (
    <>
    <Navbar/>
    {props.children}
    <Footer />
    
    </>
  )
}
