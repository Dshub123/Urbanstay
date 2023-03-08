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


// import Kalpesh from "../../images/kalpesh.jpg";
// import Pankaj from "../../images/pankaj.jpg";
// import Omkar from "../../images/omkar.jpeg";
// import Raviraj from "../../images/raviraj.jpg";

// const ContactUs = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: 40 }}>
//       <h5>
//         <b style={{ fontSize: 80, color: "#5C41A8" }}>Foodie</b>
//       </h5>
//       <div
//         className="container"
//         style={{
//           textAlign: "justify",
//           fontFamily: "sans-serif",
//           textIndent: 30,
//           fontStyle: "italic",
//         }}
//       >
//         <p>
//           This website can primarily be used in such places where extensive food
//           service facility is not available and if any particular restaurant
//           wants to deliver their food in such areas. This is achieved through an
//           easy to use graphical interface menu options. It is managed by the
//           admin. Restaurants can list their available food menus. Users can add
//           number of items to the cart. different payment options are available
//           to continue the order.Deliveryboy has permission to choose orders by
//           their locality.
//         </p>
//       </div>
//       <hr />
//       <div className="container" style={{ margin: 30, marginLeft: 140 }}>
//         <h4 style={{ marginLeft: -140 }}>Contact Us</h4>
//         <div
//           className="row"
//           style={{ height: 50, marginTop: 30, marginRight: 100 }}
//         >
//           <div className="col">
//             <img
//               src={Kalpesh}
//               className="card-img-top"
//               style={{
//                 height: 250,
//                 width: 200,
//                 boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
//                 display: "block",
//                 borderRadius: 5,
//               }}
//               alt="..."
//             />
//             <div style={{ marginLeft: -110, marginTop: 10 }}>
//               {" "}
//               <h5 style={{ textAlign: "center" }}>Kalpesh Pagar</h5>
//             </div>
//             <div
//               style={{
//                 marginLeft: -40,
//                 marginTop: 10,
//                 marginBottom: 20,
//                 color: "blue",
//               }}
//             >
//               {" "}
//               <h7 style={{ textAlign: "center" }}>kalpeshpagar96@gmail.com</h7>
//             </div>
//           </div>
//           <div className="col">
//             <img
//               src={Pankaj}
//               className="card-img-top"
//               style={{
//                 height: 250,
//                 width: 200,
//                 boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
//                 display: "block",
//                 borderRadius: 5,
//               }}
//               alt="..."
//             />
//             <div style={{ marginLeft: -100, marginTop: 10 }}>
//               {" "}
//               <h5 style={{ textAlign: "center" }}>Pankaj Hodage</h5>
//             </div>
//             <div
//               style={{
//                 marginLeft: -60,
//                 marginTop: 10,
//                 marginBottom: 20,
//                 color: "blue",
//               }}
//             >
//               {" "}
//               <h7 style={{ textAlign: "center" }}>pankaj.mj22@gmail.com</h7>
//             </div>
//           </div>
//           <div className="col">
//             <img
//               src={Raviraj}
//               className="card-img-top"
//               style={{
//                 height: 250,
//                 width: 200,
//                 boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
//                 display: "block",
//                 borderRadius: 5,
//               }}
//               alt="..."
//             />
//             <div style={{ marginLeft: -110, marginTop: 10 }}>
//               {" "}
//               <h5 style={{ textAlign: "center" }}>Raviraj Navale</h5>
//             </div>
//             <div
//               style={{
//                 marginLeft: -60,
//                 marginTop: 10,
//                 marginBottom: 20,
//                 color: "blue",
//               }}
//             >
//               {" "}
//               <h7 style={{ textAlign: "center" }}>ravinavale9899@gmail.com</h7>
//             </div>
//           </div>
//           <div className="col">
//             <img
//               src={Omkar}
//               className="card-img-top"
//               style={{
//                 height: 250,
//                 width: 200,
//                 boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
//                 display: "block",
//                 borderRadius: 5,
//               }}
//               alt="..."
//             />
//             <div style={{ marginLeft: -110, marginTop: 10 }}>
//               {" "}
//               <h5 style={{ textAlign: "center" }}>Omkar Kate</h5>
//             </div>
//             <div
//               style={{
//                 marginLeft: -60,
//                 marginTop: 10,
//                 marginBottom: 20,
//                 color: "blue",
//               }}
//             >
//               {" "}
//               <h7 style={{ textAlign: "center" }}>omnaka98@gmail.com</h7>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
