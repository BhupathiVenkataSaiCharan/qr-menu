import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Qr from './Qr';

import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Menu from './Menu';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route exact path='/Qr' element={<Qr/>} />
          {/* <Route path='/Qr' element={<Qr/>} />
          <Route path='/Navbar' element={<Navbar/>} /> */}

          <Route path='/Menu' element={<Menu/>} />

          <Route path="*" element={<Navigate replace to="/Qr"/>}/>
          <Route path="/" element={<Navigate replace to="/Qr"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
