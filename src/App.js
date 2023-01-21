import React from 'react';
// import './App.css';
import Qr from './Qr';

import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';

import "./menu.css";


import Menu from "./Menu";
import Api from './Api';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route exact path='/Qr' element={<Qr/>} />

          <Route path='/Menu' element={<Menu/>} />

          <Route path='/Api' element={<Api/>}/>

          <Route path="*" element={<Navigate replace to="/Qr"/>}/>
          <Route path="/" element={<Navigate replace to="/Qr"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
