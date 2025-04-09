import React from 'react'
import loginimage from '../assets/loginimage.png';
import logo from '../assets/logo.png';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();

  const handlelogin=(e)=>{
    e.preventDefault();
    navigate('/page2');
  }

  return (
    <div className='login-container'>
      <div className='left'>
        <img src={loginimage} alt='loginamge' className='login-image'></img>
      </div>
      <div className='right'>
        <div className='navbar'>
          <img src={logo} alt='icon' className='icon-image'/>
          <span className='my-work1'>MY WORK</span>
        </div>
        <form className='login-form' onSubmit={handlelogin}>
          <h2 className='heading'>Login</h2>
          <label for="email" className="email-label">Email*</label>
          <input type="email" id="email" placeholder="Enter Email" className="email-input" required />
          <label for="password" className="password-label">Password*</label>
          <input type="password" id="password" placeholder="Enter Password" className="password-input" required />

          <button type='submit' >Login</button>

        </form>
      </div>

    </div>
  )
}

export default Login
