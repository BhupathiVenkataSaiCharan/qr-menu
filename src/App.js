import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Qr from './Qr';

import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    // </div>
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/Qr' element={<Qr/>} />
          <Route path='/Navbar' element={<Navbar/>} />

          <Route path="*" element={<Navigate replace to="/Navbar"/>}/>
          <Route path="/" element={<Navigate replace to="/Qr"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
