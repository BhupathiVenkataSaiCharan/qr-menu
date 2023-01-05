import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { QRCodeCanvas } from "qrcode.react";

const Qr = () => {

    let navigate = useNavigate();

    // const [url, setUrl] = useState("http://localhost:3000/navbar");
    // const [url, setUrl] = useState("https://qr-menu-jet.vercel.app/navbar");
    const [url, setUrl] = useState("https://qr-menu-jet.vercel.app/Navbar");


    const scanUrl = () =>{
        navigate('/Navbar');
    }

  return (
    <div>
        <h2 className='head'>Qr Code to Menu of Restaurant</h2>
        <button onClick={scanUrl}>Scan</button>
        <QRCodeCanvas value={url} />
    </div>
  )
}

export default Qr;