import React from 'react';
import './App.css';

import Home from './Component/Home'
import Loginpage from './Component/Loginpage'
import Productpage from './Component/Productpage'
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/' element= {<Home/>} />
    <Route path='/loginpage' element= {<Loginpage/>} />
    <Route path='/productpage' element= {<Productpage/>} />
    
    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
