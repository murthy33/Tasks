import React from 'react'
import logo from '../assets/logo.png';
import notification from '../assets/notification.png';
import Profile from '../assets/profile.png';
import '../Styles/Navbar.css';
import { useNavigate } from 'react-router-dom';


function Navbar({ setSearchQuery }) {
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setSearchQuery(e.target.value)
  }
  return (
    <div className='navi'>
        <img src={logo} alt='logo-image' className='logo' onClick={()=>navigate('/')}/>
        <span className='my-work' onClick={()=>navigate('/')}>MY WORK </span>
        <input type='text' className='search' placeholder='🔍Search any Name' onChange={handleChange}></input>
        <img src={notification} className='notification-icon'/>
        <img src={Profile} className='profile-icon'/>
    </div>
  )
}
export default Navbar;