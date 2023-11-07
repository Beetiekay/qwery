import "../Holiday/Holiday.css";
import image from "../../src/assets/image/20.jpg";


const Holiday = () =>{
    return(
      <>
      <section class="holiday">
        <div class="holiday-img">
            <img src={image}/>
        </div>
        <div class="holiday-text">
            <h5>Outside Of Country</h5>
            <h2>Have You Enjoy Your Holiday</h2>
            <p>You will be Amazed If You Take Part In This Sailing Komobo Islan Tour Package . So it Also Mandatory For You ,z Beside Enjoy Komobo Tourism on Komobo Island, You Also Have To Taste The Marine Tourism. The Beutiful Wter From Komobo Will Make You Meet Many People From Other Countrys.</p>
            <a href="#" class="btn">Read More</a>
        </div>
        </section>
      </>
    )
  };
  
  export default Holiday;