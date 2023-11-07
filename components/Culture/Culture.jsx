import "../Culture/Culture.css";
import image24 from "../../src/assets/image/24.jpg";

const Culture = () =>{
    return(
    <>
    <section class="culture">
        <div class="culture-text">
            <h5>Nigeria Culture</h5>
            <h2>Our culture here is very friendly to people</h2>
            <p>Know for this politeness, manners and gentlness. This become a characteristic when they mingle other tribes and become basic traits that are passe down by their ancestors.</p>
            <a href="#" class="btn">Read More</a>
        </div>
        <div class="culture-img">
            <img src={image24}/>
        </div>
       </section>
    </>
    )
};

export default Culture;