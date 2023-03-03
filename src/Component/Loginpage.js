import React from 'react';
import './Commoncss.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginpage() {

const[email,setEmail]= useState('')
const[password,setPassword]= useState('')
const navigate = useNavigate()

function loginUser(e){
  e.preventDefault()

  if (email === 'admin@gmail.com' && password === "12345") {

    navigate('/productpage')
  }
  

}

  return (
    <div className='login-div'>
     <Navbar />
     <h1 className='log-txt'>Please Login First</h1>

     <form>
      
     <div className='log-div'>
      <label className='email-lab'>Email-id</label><br/>

      <input placeholder='Email' type='text' className='user-input' value ={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

      <label className='pass-lab'>PassWord</label><br/>

      <input placeholder='Password'  type='text'  className='user-input' value ={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
      <button className='log-btn' onClick={loginUser}>Login</button>
    
    </div>
    </form>     
    </div>
  );
}

export default Loginpage;