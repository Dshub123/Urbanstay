import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../images/logo1.png"
import "./homenavbar.css";
import { Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPowerOff, FaAddressBook, FaBed } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OwnerNavbar = () => {
    const [state, setEmail] = useState(sessionStorage.getItem("values"))
    const [Role, setRole] = useState(sessionStorage.getItem("role"))
    const [Mobile, setMobile] = useState(false)
    const navigate=useNavigate()  
    const logout = () => {
        sessionStorage.clear();
        toast.success(`Thank You for Using Urban Stay!`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(() => {
            
              navigate('/signin');
              
            }, 2000);

      };
    return (
        <nav className="navbar1">
            {/* <div className="container"> */}
            <img className="logo" src={logo} alt="Urban Stay logo"></img>
            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <NavLink to="/" className="link" style={({ isActive }) => (isActive ? { color: "blue" } : { color: "black" })}>
                    Home
                </NavLink>
                <NavLink to="/about" className="link" style={({ isActive }) => (isActive ? { color: "blue" } : { color: "black" })}>
                    About Us
                </NavLink>
                <NavLink to="/contact" className="link" style={({ isActive }) => (isActive ? { color: "blue" } : { color: "black" })}>
                    Contact Us
                </NavLink>
                <NavLink to="" className="link" style={({ isActive }) => (isActive ? { color: "blue" } : { color: "black" })}>


                    <Dropdown>
                        <Dropdown.Toggle variant="info-outline" style={{border:"none"}} id="dropdown-custom-components">
                            {state}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClickCapture={logout} style={{color:"steelblue"}}>
                                <FaPowerOff className="icons mx-2" style={{color:"steelblue"}} size={20}/>
                                <b><i>Logout</i></b>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" style={{color:"steelblue"}}>
                             <FaAddressBook className="icons mx-2" style={{color:"steelblue"}} size={20}/>
                                <b><i>Profile</i></b>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3" style={{color:"steelblue"}}>
                            <FaBed className="icons mx-2" style={{color:"steelblue"}} size={20}/>
                            <b><i>Bookings</i></b>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </NavLink>

            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}

            </button>
            {/* </div> */}
        </nav>

    )
}

export default OwnerNavbar;