import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../image/header/logo.png.webp";

const Headers = () => {
  return (
    <header>
        <div className='header-container'> 
        <nav>
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <ul className='header'>
                <li>
                <Link to="/">HOME</Link>
                </li>
                <li>
                <Link to="/womens">WOMEN'S</Link>
                </li>
                <li>
                <Link to="/mens">MEN'S</Link>
                </li>
                <li>
                <Link to="/shop">SHOP</Link>
                </li>
                <li>
                <Link to="/pages">PAGES</Link>
                </li>
                <li>
                <Link to="/contact">CONTACT</Link>
                </li>
                <ul className='logres'>
                <li>
                <Link to="/login">Login/Register</Link>
                </li>
                <li>
                <Link to="/register"></Link>
                </li>   
                </ul>            
            </ul>
        </nav>
        
        </div>

    </header>
      
   
  )
}

export default Headers;
