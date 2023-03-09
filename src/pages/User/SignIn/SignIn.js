import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import HomeNavbar from "../../../components/Header/HomeNavBar";
import config from "../../../config";
import "./signin.css";
export default function SignIn() {
  const navigate=useNavigate()  
  const [state,setState] = useState({
    mobile: '',
    password: '',
    role:"",
  })
  
  const signup=()=>{
         
          
    axios.post(config.serverURL+"/urbanstay/loginuser",state).then((res)=>{

    const  {mobile,role ,...values}=res.data
    console.log(role);
    sessionStorage.setItem("role", role)
    sessionStorage.setItem("values",values.email)
    
    
    
    if(role=='Tenant'){
      navigate('/tenant')
    }
    else if(role=='Owner'){
      navigate("/owner")

    }
    else if(role=='Admin'){
      navigate('/admin')
    }
    else{
      navigate("/signin")
    }
                  
    }).catch(err=>{
     console.log(err)
    })

 }

  useEffect(()=>{

  },[])
const handler=(e)=>{
   const {name, value}=e.target

   setState({
    ...state, [name]:value
   })
}

    return (
      <>
      <HomeNavbar/>
      <div className="container" id="form-container">
      

        <h3>Log in to UrbanStay</h3>
        <hr id="hrLine"/>
        <br/>
        <div className="form-group">
          <label for="MobileNo">Mobile Number</label>
          <input
            type="mobile"
            id="MobileNo"
            className="form-control"
            placeholder="Enter Mobile Number"
            name="mobile"
            value={state.mobile}
            onChange={handler}
          />
          
        </div>
        <br/>

        <div className="form-group">
          <label for="Password">Password</label>
          <input
            type="password"
            id="Password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={state.password}
            onChange={handler}
          />
         
        </div>

        {/* <div className="form-group">
          <label for="UserRole">User Type</label>
          <select id="UserRole" className="form-select" value={this.state.userType} onChange={(event) => this.setState({ userType: event.target.value })}>
          <option value="" hidden>Select User Type</option>
            <option value="Owner">Owner</option>
            <option value="Tenant">Tenant</option>
          </select>
        </div> */}
        <br></br>

        <button  className="btn btn-primary btn-lg btn-block" onClick={signup}>
          Sign in
        </button>
        <br/><br/>
        <h6 className="forgot-password text-right">
          Not registered yet? <a href="./signup">Sign Up</a>
        </h6>
      
      </div>
      </>
    );
  
      }
    


