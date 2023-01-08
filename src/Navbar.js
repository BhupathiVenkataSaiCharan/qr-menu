import React from 'react';

import DMenu from "./DMenu";
import Menu from './Menu';

const Navbar = () => {
  return (
    <div className='body'>
        <nav>
            <div id="navigation-container">
                <img src="/images/logo.svg"/>
                <ul>
                    <li><a href="#" className='help'>Help</a></li>
                    <li><a href="#"><img src='/images/signin.png'/>Signin</a></li>
                    {/* <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Get in Touch</a></li> */}
                </ul>
            </div>
        </nav>
        {/* <DMenu/> */}
        <Menu/>
    </div>

  )
}

export default Navbar;