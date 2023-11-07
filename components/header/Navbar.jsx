import "../header/Navbar.css";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


const Navbar = () =>{
    return(
      <>
     <div className="nav-bar">

      <div className="logo-header">
      <div class="logo">QWE<span>Ry</span></div>
      </div>
       <input type="checkbox" id="check"></input>

     <span className="menu">
         <a href="#">Home</a>
         <a href="#">About</a>
         <a href="#">Courses</a>
         <a href="#">Reviews</a>
         <a href="#">Contact</a>
     <label For="check" className="close-menu"><AiOutlineClose/></label>
     </span>

  <div className="h-navbar">
        <h3>Follow</h3>
        <a href="#"><AiFillFacebook/></a>
        <a href="#"><AiFillInstagram/></a>
        <a href="#"><AiFillTwitterCircle/></a>
  </div>

     <label For="check" className="open-menu"><AiOutlineMenu/></label>
   </div>
      </>
    )
  };
  
  export default Navbar;