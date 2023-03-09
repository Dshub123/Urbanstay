import HomeNavbar from "../../../components/Header/HomeNavBar";

import React, { Component } from "react";
import "./signup.css";
import axios from "axios";
import config from "../../../config";
import { redirect, Redirect, useNavigate } from "react-router-dom";
export default class SignUp extends Component {
     

  constructor(props){
    
    super(props);
   
        this.state = {
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        role: '',
        password: '',
        confirm_password: '',
        address:'',
        errors:{},
        redirect:null
    };
      
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    

    // Perform validation
    const errors = this.validateForm();

    // If there are no validation errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form data to the server


      axios.post(config.serverURL+"/urbanstay/newuser",this.state).then(res=>{
           

             alert("User Registered")
             return <Navigate></Navigate>     
           

      }).catch(err=>console.log(err))
    } else {
      // Update the state with the validation errors
      this.setState({ errors });
    }
  };

  validateForm = () => {
    const {first_name,last_name,email,mobile,role,password,confirm_password} = this.state;
    const errors = {};

    // validateForm = () => {
    //   const {first_name, last_name, email, mobile_number, user_type, password, confirm_password} = this.state;
    //   const errors = {};
    
      // if (first_name.trim() === '') {
        if(first_name.length==0)
        {
        errors.first_name = 'First name is required';
        }
        else if (first_name.length < 2) {
          errors.first_name = <h6 style={{color:'red'}}>First name must be at least 2 characters long</h6>;
        }
        if (last_name.trim() === '') {
        errors.last_name = 'Last name is required';
      }
    
      if (email.trim() === '') {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = <h6 style={{color:'red'}}>Invalid email format</h6>;
      }
    
      if (mobile.trim() === '') {
        errors.mobile = 'Mobile number is required';
      } else if (!/^[0-9]{10,10}$/.test(mobile)) {
        errors.mobile = <h6 style={{color:'red'}}>Mobile Number must exactly be 10 digits</h6>;
      }
    
      if (role.trim() === '') {
        errors.role =  <h6 style={{color:'red'}}>User type is required</h6>;
      }
    
      if (password.trim() === '') {
        errors.password = 'Password is required';
      } else if (password.length < 8) {
        errors.password =  <h6 style={{color:'red'}}>Password must be at least 8 characters</h6>;
      }
    
      if (confirm_password.trim() === '') {
        errors.confirm_password = 'Confirm password is required';
      } else if (password !== confirm_password) {
        errors.confirm_password =  <h6 style={{color:'red'}}>Passwords does not match</h6>;
      }
    
      return errors;
    };
    
    

    render() {
        return (
          <>
          <HomeNavbar/>
          <div className="container" id="form-container">
            <form>
                <h3>Let's Start Journey with UrbanStay</h3>
                <hr id="hrLine"/>
                <div className="form-group">
                    <label for="FirstName">First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="FirstName"
                    placeholder="First name" 
                    value={this.state.first_name} 
                    onChange={(event) => this.setState({ first_name: event.target.value })} 
                    required/>
                     {this.state.errors.first_name && <div className="error">{this.state.errors.first_name}</div>}
                    {/* <input type="text" className="form-control" placeholder="First name" /> */}
                </div>
                <br/>
                <div className="form-group">
                    <label for="LastName">Last name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="LastName"
                    placeholder="Last name" 
                    value={this.state.last_name} 
                    onChange={(event) => this.setState({ last_name: event.target.value })} 
                    required/>
                      {this.state.errors.last_name && <div className="error">{this.state.errors.last_name}</div>}
                    {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                </div>
                <br/>
                <div className="form-group">
                    <label for="EmailID">Email</label>
                    <input 
                    type="email" 
                    className="form-control"
                    id="EmailID"
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={(event) => this.setState({ email: event.target.value })} 
                    required/>
                      {this.state.errors.email && <div className="error">{this.state.errors.email}</div>}
                    {/* <input type="email" className="form-control" placeholder="Enter email" /> */}
                </div>
                <br/>
                <div className="form-group">
                    <label for="MobileNo">Mobile Number</label>
                    <input 
                      type="text" 
                      className="form-control"
                      id="MobileNo" 
                      placeholder="Mobile number " 
                      value={this.state.mobile} 
                      onChange={(event) => this.setState({ mobile: event.target.value })} 
                      required/>
                        {this.state.errors.mobile && <div className="error">{this.state.errors.mobile}</div>}
                    {/* <input type="mobile" className="form-control" placeholder="Enter Mobile Number" /> */}
                </div>
                <br/>
                <div className="form-group">
                    <label for="Address">Address</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Address"
                    placeholder="Address" 
                    value={this.state.address} 
                    onChange={(event) => this.setState({ address: event.target.value })} 
                    required/>
                     {/* //{this.state.errors.first_name && <div className="error">{this.state.errors.first_name}</div>} */}
                    {/* <input type="text" className="form-control" placeholder="First name" /> */}
                </div>
                <br />
                <div className="form-group">
                <label for="UserRole">User Type</label>
                 <select 
                  className='form-select'
                  id="UserRole" 
                  value={this.state.role} 
                  onChange={(event) => this.setState({role:event.target.value})}>
                <option value="" hidden>Select User Type</option>
                <option value="Owner">Owner</option>
                <option value="Tenant" selected>Tenant</option>
                </select>
                  {/* {errors.user_type && <div className="text-danger">{errors.user_type}</div>} */}
                </div>
                <br/>

                <div className="form-group">
                    <label for="Password">Password</label>
                    <input 
                      type="password" 
                      className="form-control"
                      id="Password"
                      placeholder="Password" 
                      value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} 
                      required/>
                        {this.state.errors.password && <div className="error">{this.state.errors.password}</div>}
                    {/* <input type="password" className="form-control" placeholder="Enter password" /> */}
                </div>
                <br/>
                <div className="form-group">
                    <label for="Password2">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control"
                      id="Password2" 
                      placeholder="Re-enter Password" 
                      value={this.state.confirm_password} onChange={(event) => this.setState({ confirm_password: event.target.value })} 
                      required/>
                        {this.state.errors.confirm_password && <div className="error">{this.state.errors.confirm_password}</div>}
                    {/* <input type="password" className="form-control" placeholder="Enter password" /> */}
                </div>
                <br></br>
                
                <button 
                type="submit" 
                className="btn btn-primary btn-lg btn-block" 
                onClick={this.handleSubmit}
                // onClick={(this.alertevent)}
                >
                  Register
                </button>
                <br/>
                <br/>
                <h6 className="forgot-password text-right">
                    Already registered <a href="/signin">Sign in?</a>
                </h6>
            </form>
          </div>
            </>

        );
    }
}
export  function Navigate(props){
  var navig= useNavigate()
  return <SignUp navigate={navig} ></SignUp>

}


