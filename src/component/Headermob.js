import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const Headermob = ({mobileHeaderOn, setMobileHeaderOn}) => {

  const [mobileHeaderClose, setMobileHeaderClose] = useState(false)


  const mobileHeaderCloses = (e) => {
  
    if(e.target===e.currentTarget){
      e.currentTarget.classList.add('display-none')
    }
   
   
  }

  return (
    <div className='mobile-header display-none' onClick={mobileHeaderCloses}>
         <div className='mobile-header-menu' id="mobile-header-deactive">
      {/* <i className="fa-solid fa-xmark" id="x" onClick={mobileHeaderClose}></i> */}
      <ul id="nav-menu">
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
      </ul> 
      </div>
    </div>
    
  )
}

export default Headermob
