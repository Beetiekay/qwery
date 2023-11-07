import "../Footer/Footer.css";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


const Footer = () =>{
    return(
     <>
     <section class="footer">

            <div class="footer-box">
                <h3>Services</h3>
                <a href="#">Email Marketing</a>
                <a href="#">Campaign</a>
                <a href="#">Branding</a>
                <a href="#">Online</a>
            </div>

            <div class="footer-box">
                <h3>About</h3>
                <a href="#">Our Story</a>
                <a href="#">Benefit</a>
                <a href="#">Team</a>
                <a href="#">Careers</a>
            </div>

            <div class="footer-box">
                <h3>Help</h3>
                <a href="#">FAQS</a>
                <a href="#">Contact Us</a>
            </div>

            <div class="footer-box">
                <h3>Social</h3>
                <div class="social">
                    <a href="#"><AiFillInstagram/></a>
                    <a href="#"><AiFillFacebook/></a>
                   <a href="#"><AiFillTwitterCircle/></a>
                </div>
            </div>

          </section>
                        <div class="copyright">
                            <p>Copyright 2023 By Bishir Tukur (BTK)</p>
                        </div>
     </>
    )
};

export default Footer;