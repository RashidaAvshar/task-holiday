import React from 'react';
import discount from "../image/discount/discount.jpg.webp"
import Countdown from 'react-countdown';

const Discount = () => {
  return (
    <div className='container'>
        <div className="discount-box">
        <div className="image">
            <img src={discount} alt="" />
            </div>
            <div className="time">
              <div className='circle'>
              </div>
              <div className='circle-menu'>
              <p>
                  DISCOUNT
                </p>
                <h2>Summer 2019</h2>
                <h5>SALE <span>50%</span></h5>
              </div>

            <Countdown date={Date.now() + 10000}  className="countdown"/>
            <a href="#">SHOP NOW</a>
            </div>
        </div>
      
    </div>
  )
}

export default Discount;
