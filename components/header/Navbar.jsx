import "../header/Navbar.css";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


const Navbar = () =>{
    return(
      <>
     <div className="nav-bar">

      <div className="logo-header">
      <a href="#" class="logo">QWE<span>Ry</span></a>
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
     <label For="check" className="open-menu"><AiOutlineMenu/></label>
   </div>
      </>
    )
  };
  
  export default Navbar;