import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';






const Headermob = ({mobileHeaderOn, setMobileHeaderOn}) => {
  // document.querySelector("#menu").addEventListener("click", ()=>{
  //   let navMenu = document.querySelector("#mobile-header-deactive");
  //   navMenu.classList.remove("mobile-header-deactive")
  //   navMenu.classList.add("mobile-header-active");
  // })
  // document.querySelector("#x").addEventListener("click", ()=>{
  //  let navMenu = document.querySelector("#mobile-header-deactive");
  //   navMenu.classList.remove("mobile-header-active")
  //   navMenu.classList.add("mobile-header-deactive");
  // })

  // useEffect(()=> {

  //   if(mobileHeaderOn){
  //     document.querySelector('.mobile-header').classList.remove('display-none')
     
  //   } 
  //   // else if(!mobileHeaderOn){
  //   //   document.querySelector('.mobile-header').classList.add('display-none')
  //   // }

  // },[mobil])




  const mobileHeaderClose = (e) => {
  
    if(e.target===e.currentTarget){
      e.currentTarget.classList.add('display-none')
    }
   
   
  }

  return (
    <div className='mobile-header display-none' onClick={mobileHeaderClose}>
         <div className='mobile-header-menu' id="mobile-header-deactive">
      <i class="fa-solid fa-xmark" id="x"></i>
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
