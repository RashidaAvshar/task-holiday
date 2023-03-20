import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../image/header/logo.png.webp";
import payment1 from "../image/footer/payment-1.png.webp";
import payment2 from "../image/footer/payment-1.png.webp";
import payment3 from "../image/footer/payment-1.png.webp";
import payment4 from "../image/footer/payment-1.png.webp";
import payment5 from "../image/footer/payment-1.png.webp";
// import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='container'>
        <ul className='footer-nav'>
            <li>
                <img src={logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                {/* <div className="payment-box">
                <Link to="/">{payment1}</Link>
                <Link to="/">{payment2}</Link>
                <Link to="/">{payment3}</Link>
                <Link to="/">{payment4}</Link>
                <Link to="/">{payment5}</Link>
                </div> */}
            </li>
            <li>
                <h4>QUICK LINKS</h4>
                {/* <Link to="/">About</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">Contact</Link>
                <Link to="/">FAQ</Link> */}
                <a href="#">About</a>
                <a href="#">Blogs</a>
                <a href="#">Contact</a>
                <a href="#">FAQ</a>
            </li>
            <li>
                <h4>ACCOUNT</h4>
                <a href="#">My account</a>
                <a href="#">Orders Tracking</a>
                <a href="#">Checkout</a>
                <a href="#">Wishlist</a>
            </li>
            <li>
                <h4>NEWSLETTER</h4>
                <div className="subscribe">
                <input type="email" name="" id="" placeholder='Email'/>
                <button>SUBSCRIBE</button>
                </div>
                <div className='icon'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-pinterest"></i>
                </div>
            </li>
        </ul>
      
    </div>
  )
}

export default Footer;
