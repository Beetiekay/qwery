import Culture from "../components/Culture/Culture";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Holiday from "../components/Holiday/Holiday";
import Newsletter from "../components/Newsletter/Newsletter";
import Tour from "../components/Tour/Tour";
import Navbar from "../components/header/Navbar";
import Home from "../components/home/Home";


const App = () =>{
  return(
    <>
    <Navbar/>
    <Home/>
    <Features/>
    <Holiday/>
    <Tour/>
    <Culture/>
    <Newsletter/>
    <Footer/>
    </>
  )
};

export default App;