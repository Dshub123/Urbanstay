import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDiscord, FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer=()=> {
  return (
    <>
      <footer>
          <div className="container grid grid-four-column">
            <div className="footer-social">
              <h3>Follow Us</h3>
              
              <div className="footer-social--icons">
                  <a
                    href="https://www.gmail.com/"
                    target="_blank">
                    <FaEnvelope className="icons mx-2" size={40} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank">
                    <FaInstagram className="icons mx-2" size={40}/>
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank">
                    <FaYoutube className="icons mx-2" size={50}/>
                  </a>
              </div>
          </div>
          <div className="footer-bottom--section">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="/" target="_blank" rel="noopener noreferrer">urbanstay2023@gmail.com</a></span>
          </div>
        </div>
        </footer>

    </>
    )
}

export default Footer;