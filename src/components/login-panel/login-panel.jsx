import { useState } from "react";
import React, {useEffect} from "react";
import axios from "axios";
import fs from "fs";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function MyComponent(){

 
  async function LogIn(){
    try{
      const response = await axios.post('http://localhost:9000/login/', user)
      // console.log(response.data);
      return response.data
    }catch(err){
      console.error(err)
    }
  }

  const navigate = useNavigate()

  async function authenticate(){
    let auth = await LogIn();
    console.log("auth value", auth)
    if(auth){
      navigate('/homepage')
    }
   
  }
   

  const [user, setUser] = useState({
    name : '',
    email:'',
    password : ''
  })

  function updateUser(e){
    const {name,value} = e.target
    //console.log(value);
    setUser({
      ...user,
      [name] : value
    })
  }

  return(
      <>
        <div>
              
              <div className="container">
        <div className="login-card">
          <div className="card_title">
            <h1>Sign in</h1>
            <span>Dont have an account? <a href="signup">Sign up</a></span>
          </div>
          <div className="form">
          <form  onSubmit={(e) => {e.preventDefault()}} method="post">
            <input type="email" name="email" placeholder="Email" id="email" value = {user.email} onChange={(e)=>updateUser(e)}/>
            <input type="password" name="password" placeholder="Password" id="password" value={user.password} onChange={(e) => updateUser(e)} />
            <button onClick={()=>authenticate()}>Sign In</button>
            </form>
          </div>
          <div className="card_terms">
              <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <a href="">Terms of Service</a></span>
          </div>
        </div>
      </div>


          </div>
          

      
      </>
  )



}




 // <div className="container" id="container">
  //       <div className="form-container sign-up-container">
  //         <form onSubmit={(e) => {e.preventDefault()}}>
  //           <h1>Create Account</h1>
  //           <div className="social-container">
  //             <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
  //             <a href="#" claszsName="social"><i className="fab fa-google-plus-g"></i></a>
  //             <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
  //           </div>
  //           <span>or use your email for registration</span>
  //           <input type="text" placeholder="Name" name="name" value={user.name} onChange={(e) => updateUser(e)} />
  //           <input type="email" placeholder= "Email" name="email" value={user.email} onChange={(e) => updateUser(e)}  />
  //           <input type="password" placeholder={"Password"} name="password" value={user.password} onChange={(e) => updateUser(e)} />
  //           <button onClick={() =>SignUp()} >Sign Up</button>
  //         </form>
  //       </div>
  //       <div className="form-container sign-in-container">
  //         <form onSubmit={(e) => {e.preventDefault(); console.log("nothing")}} >
  //           <h1>Sign in</h1>
  //           <div className="social-container">
  //             <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
  //             <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
  //             <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
  //           </div>
  //           <span>or use your account</span>
  //           <input type="email"  placeholder= "Email" name="email" value={userin.email} onChange={(e) => updateUserin(e)} />
  //           <input type="password" placeholder={"Password"} name="password" value={userin.password} onChange={(e) =>updateUserin(e)}  />
  //           <a href="#">Forgot your password?</a>
  //           <button type="submit" onClick={()=>LogIn() ? ()=>navigate('home'): ()=>navigate('')} >Sign In</button>
  //         </form>
  //       </div>
  //       <div className="overlay-container">
  //         <div className="overlay">
  //           <div className="overlay-panel overlay-left">
  //             <h1>Welcome Back!</h1>
  //             <p>To keep connected with us please login with your personal info</p>
  //             <button className="ghost" id="signIn">Sign In</button>
  //           </div>
  //           <div className="overlay-panel overlay-right">
  //             <h1>Hello, Friend!</h1>
  //             <p>Enter your personal details and start journey with us</p>
  //             <button className="ghost" id="signUp"  >Sign Up</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
      

// export default function(){
//     return(
    
//       <div className="container" id="container">
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//               <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your email for registration</span>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button>Sign Up</button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="#">
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//               <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your account</span>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <a href="#">Forgot your password?</a>
//             <button>Sign In</button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               <button className="ghost" id="signIn">Sign In</button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button className="ghost" id="signUp">Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>
      
      
//         )
// }




