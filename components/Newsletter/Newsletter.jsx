import "../Newsletter/Newsletter.css";

const Newsletter = () =>{
    return(
        <>
        <section class="newsletter">
        <div class="newsletter-content">
            <div class="newsletter-text">
                <h2>Ready To Explore?</h2>
                <p>Let's go on vacation, Make your day</p>
            </div>

            <form action="">
                    <input type="Email" placeholder="Enter your email..." required/>
                    <input type="submit" value="Get Started" class="btn"/>
            </form>
        </div>
       </section>
        </>
    )
};

export default Newsletter;