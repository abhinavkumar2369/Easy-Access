import React from "react";
import './App.css';
import Logo from './Resources/logo.svg'
import GitHub_Icon from './Resources/github.svg'
import Facebook_Icon from './Resources/facebook.svg'
import LinkedIn_Icon from './Resources/linkedin.svg'



function App() {
  return (
    <>

      {/* ---- Container ----*/}
      <div id="container" className="container">
      
         {/* ---- Heading Block ---- */}
         <span class="heading" id="heading">
             <img src={Logo} alt="logo" />
             <span>Easy Access</span>
         </span>
    
         {/* ---- Welcome Block---- */}
         <span class="welcome" id="welcome">
             <h2>Welcome to EasyAccess! 👋</h2>
             <p>Please sign-in to your account and start the adventure</p>
         </span>
    
         {/* ---- Login Block ---- */}
         <span class="login" id="login">
             <label for="login-email">E-mail</label>
             <input type="text" id="login-email" placeholder="Enter your E-mail" />
         </span>

         {/* ---- Password Block ---- */}
         <span class="password" id="password">
             <span>
                 <label for="forget-password">Password</label>
                 <a href="#" id="forget-password">Forget Password?</a>
             </span>
             <input type="password" placeholder="Enter your password" id="login-email-username" />
         </span>
 
         {/* ---- Remember Me ---- */}
         <span class="remember-me">
             <input type="checkbox" name="" id="remember-me" />
             <label for="remember-me">Remember Me</label>
         </span>
 
         {/* ---- Sign In Button ---- */}
         <span class="sign-in">
            <button id="sign-in">Sign In</button>
         </span>
  
         {/* ---- Create an Account  ---- */}
         <span class="create-an-account">
             <p>New on our platform? <a href="#">Create an account</a></p>
         </span>
  
         {/* ---- HR [OR] Option ---- */}
         <span class="hr">
             <span><hr/></span>
             <p>OR</p>
             <span><hr/></span>
         </span>
  
         {/* ---- Logo Block ---- */}
         <span class="logo">
             
            {/* ---- Logo 1 ---- */}
            <span id="logo-1">
                <a href="">
                    <img src={Facebook_Icon} alt="Facebook" />
                </a>
            </span>
            
            {/* ---- Logo 2 ---- */}
            <span id="logo-2">
                <a href="">
                    <img src={LinkedIn_Icon} alt="LinkedIn" />
                </a>
            </span>

            {/* ---- Logo 3 ---- */}
            <span id="logo-3">
                <a href="">
                    <img src={GitHub_Icon} alt="GitHub" />
                </a>
            </span>

        </span>

      </div>
    </>
  )
}

export default App;