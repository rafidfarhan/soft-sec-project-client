import React from 'react';

// import SideBanner from '../../components/SideBanner/SideBanner'
// import LoginForm from '../../components/LoginForm'
import useLogin from '../../config/useLogin';
import './Login.css';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import {Link} from "react-router-dom";

const Login = () => {

    const { handleChange, handleSubmit, values, credentialError } = useLogin();
  
  
    return (
      <div className = 'login'>
        <div className= "login-body">
        <div className = 'top-banner'></div>
          <div  className = "login-form-wrap">
            
          <span className="login-form-title">Login to Songbird</span>
            <form className = 'login-form' onSubmit = {handleSubmit}>

              <div className = "input-wrap m-b-20 rs1-wrap-input100">
                <input 
                id="first-name" 
                className= {`input-100 ${credentialError && `input-100-red`}`} 
                type="text" 
                name="email" 
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                />
                
              </div>
              <div className = "input-wrap m-b-20 rs2-wrap-input100">
                <input 
                className= {`input-100 ${credentialError && `input-100-red`}`}
                type="password" 
                name="password" 
                placeholder="Password" 
                value={values.password}
                onChange={handleChange}
                />
              </div>
              <div className = 'button-wrap'>
                <button className ="login-form-button" type = 'submit'>Sign in</button>
              </div>
              
              {credentialError && <div className= 'txt4-wrap'>
              <ErrorOutlineRoundedIcon 
                className = 'txt4-icon'
              />
                <span className="txt4">
                {credentialError + '! Try again.'}
              </span>
                </div>}
              <div className = 'forgot-pass-wrap'>
              <span className="txt1">Forgot  </span>

              {/* <Link to = "/forgotpassword">
              <span className="txt2">password?</span>
              </Link> */}
              </div>
              <div className="sign-up-wrap">

              {/* <Link to = "/signup">
              <p className="txt3">Sign Up</p>
              </Link> */}

              </div>
            </form>
          </div>
          <div className ="side-banner"></div>
        </div>
      </div>
        
    )
}

export default Login