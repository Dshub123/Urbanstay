import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../images/logo1.png"
import "./homenavbar.css";

const AdminNavbar = () =>{
    const [state , setEmail] = useState(sessionStorage.getItem("values")) 
    
        const [Mobile , setMobile] = useState(false)

    return(
        <nav className="navbar1">
            {/* <div className="container"> */}
            <img className="logo" src={logo} alt="Urban Stay logo"></img>
            <ul className= {Mobile?"nav-links-mobile":"nav-links"} onClick={()=>setMobile(false)}>
                <NavLink to="/" className="link" style={({isActive})=>(isActive?{color:"blue"}:{color:"black"})}>
                    Home
                </NavLink>
                <NavLink to="/about" className="link" style={({isActive})=>(isActive?{color:"blue"}:{color:"black"})}>
                    About Us
                </NavLink>
                <NavLink to="/contact" className="link" style={({isActive})=>(isActive?{color:"blue"}:{color:"black"})}>
                    Contact Us
                </NavLink>
                <NavLink to="/contact" className="link" style={({isActive})=>(isActive?{color:"blue"}:{color:"black"})}>
                   {state}
                </NavLink>
                
            </ul>
            <button className="mobile-menu-icon" onClick={()=>setMobile(!Mobile)}>
                {Mobile?<ImCross/>:<FaBars/>}
                
            </button>
            {/* </div> */}
        </nav>

    )
}

export default AdminNavbar;