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
   
    sessionStorage.setItem("role", role)


    
    
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

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     mobile: '',
  //     password: '',
  //     userType: 'None',
  //     errors: {}
  //   };
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Perform validation
  //   const errors = this.validateForm();

  //   // If there are no validation errors, submit the form
  //   if (Object.keys(errors).length === 0) {
  //     // Submit the form data to the server
  //   } else {
  //     // Update the state with the validation errors
  //     this.setState({ errors });
  //   }
  // };

  // validateForm = () => {
  //   const { mobile, password } = this.state;
  //   const errors = {};

    // Validate mobile number
  //   if (!mobile) {
  //     errors.mobile = 'Mobile number is required';
  //   } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)) {
  //       errors.mobile = <h6 style={{color:'red'}}>Mobile number is invalid.</h6>;
  //   }

  //   // Validate password
  //   if (!password) {
  //     errors.password = 'Password is required';
  //   } else if (password.length < 8) {
  //       errors.password = <h6 style={{color:'red'}}>Password must be at least 8 characters long</h6>;
  //   }

  //   return errors;
  // };
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
    


// import { Link } from "react-router-dom";
// import Header from "../../../components/header";
// import config from "../../../config";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const SignIn = () => {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signinUser = () => {
//     if (email.length === 0) {
//       //  alert('please enter email')
//       toast.warning("please enter email");
//     } else if (password.length === 0) {
//       //alert('please enter password')
//       toast.warning("please enter password");
//     } else {
//       axios
//         .post(
//           config.serverURL + "/user/signin",
//           { email: email, password: password },
//           { "Content-Type": "application/json" }
//         )
//         .then((response) => {
//           // alert('i am in axios ')

//           console.log(response);
//           const result = response.data;
//           console.log(result.status);
//           if (result.status === "Success") {
//             console.log("login Successfull!!!!!");

//             if (result.data.role === "CUSTOMER") {
//               sessionStorage.setItem("customerId", result.data.id);
//               navigate("/CustomerHomePage");
//               toast.success("Welcome to foodies!!! enjoy every bite...");
//             } else if (result.data.role === "ADMIN") {
//               sessionStorage.setItem("adminId", result.data.id);

//               navigate("/adminHome");
//             } else if (result.data.role === "RESTAURANT") {
//               sessionStorage.setItem("restaurentId", result.data.id);
              
//               navigate("/restaurantHome");
//               toast.success("Welcome to Foodie");
//             } else if (result.data.role === "DELIVERYBOY") {
//               sessionStorage.setItem("deliveryBoyId", result.data.id);


//               navigate("/deliveryBoyHome");
//               toast.success("Welcome to Foodie");
//             }
//           }
//           // else {
//           //   toast.error('invalid username or password')

//           //   console.log('invalid')
//           //   navigate('/signin')

//           // }
//         })
//         .catch((error) => {
//           console.log("error");
//           console.log(error);
//           toast.error("invalid username or password");

//           console.log("invalid");
//           navigate("/signin");
//         });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: 70 }}>
//         <div style={styles.container}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               className="form-control"
//               type="email"
//               required=""
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               className="form-control"
//               type="password"
//               required=""
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </div>
//           <div className="mb-3" style={{ marginTop: 30 }}>
//             <div style={{ marginLeft: 190 }}>
//               <Link style={{ textDecoration: "none" }} to="/forgotPassword">
//                 Forgot your password?
//               </Link>
//             </div>
//             <button onClick={signinUser} style={styles.signinButton}>
//               Signin
//             </button>
//             <div style={{ marginTop: 10 }}>
//               Dont have an account yet?{" "}
//               <Link style={{ textDecoration: "none" }} to="/signup">
//                 Register here
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: 400,
//     height: 320,
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

// export default SignIn;
