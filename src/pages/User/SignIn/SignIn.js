import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import HomeNavbar from "../../../components/Header/HomeNavBar";
import config from "../../../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signin.css";
export default function SignIn() {
  const navigate=useNavigate()  
  const [state,setState] = useState({
    mobile: '',
    password: '',
    role:"",
  })

  
  
  const signin=()=>{
         
          
    axios.post(config.serverURL+"/urbanstay/loginuser",state).then((res)=>{

    const  {mobile,role ,...values}=res.data
    console.log(role);
    
    sessionStorage.setItem("role", role)
    sessionStorage.setItem("values",values.email)
   
    
    
    if(role=='Tenant'){
      toast.success(`welcome ${values.email}`, {
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
          navigate('/tenant')
          
        }, 2000);

      // navigate('/tenant')
    }
    else if(role=='Owner'){
      toast.success(`welcome ${values.email}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        // alert(`welcome ${values.email}`);
        setTimeout(() => {
          navigate("/owner")
          
        }, 2000);

    }
    else if(role=='Admin'){
      toast.success(`welcome ${values.email}`, {
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
          navigate('/admin')
          
        }, 2000);

        // navigate('/admin')
    }
    else{
      toast.error("Invalid Credentials!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  
      navigate("/signin")
    }
                  
    }).catch(err=>{
     console.log(err)
     toast.error(`${err}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
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
      <div className="container" id="form-container" style={{padding:"1%"}}>
      

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
            required
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
            required
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

        <button  className="btn btn-primary btn-lg btn-block" onClick={signin} style={{width:"40%"}}>
          Sign in
        </button>
        <br/><br/>
        <h6 className="forgot-password text-right mr-4">
          Not registered yet? <a href="./signup">Sign Up</a>
        </h6>
      
      </div>
      <ToastContainer/>
      </>
    );
  
      }
    


