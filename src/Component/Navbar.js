import React from 'react';
import './Commoncss.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

  function pagelogin() {
    navigate('/loginpage')
  }
  
  function backhome() {
    navigate('/')
  }


  return (
    <div className='nav-div'>
      <h4 className='home-nav'  onClick={backhome}>HOME</h4>
      <button className='login-nav' onClick={pagelogin}>Login</button>
    </div>
  );
}

export default Navbar;
