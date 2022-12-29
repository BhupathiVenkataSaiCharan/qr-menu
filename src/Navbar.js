import React from 'react';

import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className='body'>
        <nav>
            <div id="navigation-container">
                <img src="/images/logo.svg"/>
                <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Signin</a></li>
                    {/* <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Get in Touch</a></li> */}
                </ul>
            </div>
        </nav>
        <Menu/>
    </div>

  )
}

export default Navbar;