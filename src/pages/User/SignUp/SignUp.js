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
  //  alertevent = (al) =>{
      
  //       alert("Register Here...")
      
  // };  
  
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
                    <label for="FirstName">Add</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="FirstName"
                    placeholder="First name" 
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



// import { Link } from "react-router-dom";
// import Header from "../../../components/header";
// import config from "../../../config";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import validator from "validator";
// import axios from "axios";
// const Signup = () => {
//   const [name, setName] = useState("");
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState('')

//   // this function is used to navigate from one component to another programmatically
//   // userNavigate() returns a function reference
//   const navigate = useNavigate();

//   const validate = (value) => {
 
//     if (validator.isStrongPassword(value, {
//       minLength: 8, minLowercase: 1,
//       minUppercase: 1, minNumbers: 1, minSymbols: 1
//     })) {
//       setPassword(value);
//       setErrorMessage('Is Strong Password')
//     } else {
//       setErrorMessage('Is Not Strong Password')
//     }
//   }
//   const validateEmail = (e) => {
//     var email = e.target.value;

//     if (validator.isEmail(email)) {
//       setEmail(email)
//       setMessage("valid Email !!");
//     } else {
//       setMessage("Please, enter valid Email !!");
//     }
//   }
//   const signup = () => {
//     // check if user has really entered any value
//     if (name.length === 0) {
//       toast.error("please enter name");
//     } else if (email.length === 0) {
//       toast.error("please enter email");
//     } else if (contact.length === 0) {
//       toast.error("please enter phone number");
//     } else if (password.length === 0) {
//       toast.error("please enter password");
//     } else if (confirmPassword.length === 0) {
//       toast.error("please confirm password");
//     } else if (password !== confirmPassword) {
//       toast.error("password does not match");
//     } else if (role.length === 0) {
//       toast.error("please select role");
//     } else {
//       // make the API call to check if user exists
//       axios
//         .post(config.serverURL + "/user/signup", {
//           name,
//           email,
//           contact,
//           password,
//           role,
//         })
//         .then((response) => {
//           const result = response.data;

//           if (result["status"] == "Success") {
//             toast.success("Successfully signed up new user");

//             // navigate to the signin page
//             navigate("/signin");
//           } else {
//             toast.error(result["error"]);
//           }
//           // // get the data returned by server
//           // const result = response.data

//           // // check if user's authentication is successfull
//           // if (result.data.status === 'Success') {
//           //   toast.success('successfully registered a new user')

//           //   // navigate to the singin page
//           //   navigate('/signin')
//           //   //toast.error('invalid email or password')
//           // }
//         });
//       // .catch((error) => {
//       //   console.log('error')
//       //   console.log(error)
//       //   toast.error('invalid email or password')
//       // })
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: 70, marginBottom: 20 }}>
//         <div style={styles.container}>
//           <div className="mb-3">
//             <label>Name</label>
//             <input
//               onChange={(event) => {
//                 setName(event.target.value);
//               }}
//               className="form-control"
//               type="text"
//               required=""
//             />
            
//           </div>

//           <div className="mb-3">
//             <label>Phone Number</label>
//             <input
//               onChange={(event) => {
//                 setContact(event.target.value);
//               }}
//               className="form-control"
//               type="tel"
//               required=""
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               onChange={(e) => validateEmail(e)}
//               className="form-control"
//               type="email"
//               required=""
             
//             />
//             <small style={{color:"green"}}>{message}</small>
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//              onChange={(e) => validate(e.target.value)}

//               className="form-control"
//               type="password"
//               required=""
//               placeholder="Min 8 charactors"
//             />
//             {errorMessage === '' ? null :
//         <small style={{
          
//           color: 'green',
//         }}>{errorMessage}</small>}
//           </div>

//           <div className="mb-3">
//             <label>Confirm Password</label>
//             <input
//               onChange={(event) => {
//                 setConfirmPassword(event.target.value);
//               }}
//               className="form-control"
//               type="password"
//               required=""
//             />
//           </div>
//           <div className="mb-3">
//             <label>Role</label>
//             <select
//               className="form-select form-select mb-3"
//               aria-label=".form-select-lg example"
//               required=""
//               onChange={(event) => {
//                 setRole(event.target.value);
//               }}
//             >
//               <option selected>Select Role</option>
//               <option value="CUSTOMER">Customer</option>
//               <option value="DELIVERYBOY">Delivery Boy</option>
//             </select>
//           </div>

//           <div className="mb-3" style={{ marginTop: 40 }}>
//             <div>
//               Already have an account? <Link to="/signin">Signin here</Link>
//             </div>
//             <button onClick={signup} style={styles.signinButton} type="submit">
//               Signup
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: 400,
//     height: 650,
//     padding: 20,
//     position: "relative",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     margin: "auto",
//     borderColor: "#5C41A8",
//     borderRadius: 10,
//     broderWidth: 1,
//     borderStyle: "solid",
//     boxShadow: "1px 1px 20px 5px #C9C9C9",
//   },
//   signinButton: {
//     position: "relative",
//     width: "100%",
//     height: 40,
//     backgroundColor: "#5C41A8",
//     color: "white",
//     borderRadius: 5,
//     border: "none",
//     marginTop: 10,
//   },
// };

// export default Signup;
