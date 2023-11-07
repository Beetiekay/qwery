import "../Features/Features.css";
import row5 from "../../src/assets/image/row5.jpg";
import row7 from "../../src/assets/image/row7.jpg";
import row3 from "../../src/assets/image/row3.jpg";
import row4 from "../../src/assets/image/row4.jpg";


const Features = () =>{
    return(
      <>
      <section class="feature">
    <div class="feature-content">

    <div class="row">
        <div class="row-img">
                <img src={row5}/>
            </div>
            <h5>Ski tour</h5>
        </div>

        <div class="row">
            <div class="row-img">
            <img src={row7}/>
            </div>
            <h5>Execusion tour</h5>
        </div>

        <div class="row">
            <div class="row-img">
                <img src={row3}/>
            </div>
            <h5>Spa tour</h5>
        </div>

        <div class="row">
            <div class="row-img">
                <img src={row4}/>
            </div>
            <h5>Shop tour</h5>
        </div>

    </div>
    </section>
      </>
    )
  };
  
  export default Features;