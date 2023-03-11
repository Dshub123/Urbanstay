import HomeNavbar from "../../components/Header/HomeNavBar";
import "./contactus.css";
const ContactUs = () => {
  return (
      <>
         <HomeNavbar/>
         <div className="container">
         <h2 className="common-heading" style={{marginBottom:"3rem"}}>Feel Free To Contact Us</h2>
         <iframe 
            title="urbanstay"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8677138454445!2d73.80869341392062!3d18.534879173576186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1678024528238!5m2!1sen!2sin" 
            width="90%" height="450" 
            style={{border:0}} allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
         </iframe>
         </div>
         <div className="container">
            <div className="contact-form">
               {/* Used https://formspree.io/  for mail connection*/}
               <form 
                  action="https://formspree.io/f/xpzerewr" 
                  method="POST" 
                  className="contactInputs"
               >
                  <input 
                     type="text" 
                     name="username" 
                     placeholder="username" 
                     autoComplete="off"
                     className="inputStyle"
                     required
                     />

                  <input 
                     type="email" 
                     name="Email" 
                     placeholder="Email" 
                     autoComplete="off"
                     className="inputStyle"
                     required
                  />

                  <textarea 
                     name="message" 
                     cols="30" 
                     rows="5" 
                     autoComplete="off" 
                     className="inputStyle"
                     required
                  >
                  </textarea>
                  <input type="submit" value="send" className="submitStyle"/>
               </form>
            </div>
         </div>

      </>
    );
}

export default ContactUs;


