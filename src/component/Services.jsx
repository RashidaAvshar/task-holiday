import React from 'react';

const Services = () => {
  return (
    <div className='container'>
        <div className="service-box">
          
            <div className="car-service">
            <i className="fa-solid fa-car"></i>
            <span>
            <h4>Free Shipping</h4>
            <p>For all oder over $99</p>
            </span>
            </div>
            

            <div className="money-service">
            <i className="fa-regular fa-money-bill-1"></i>
            <span>
            <h4>Money Back Guarantee</h4>
            <p>If good have Problems</p>
            </span>
            </div>

            <div className="support">
                <i className="fa fa-support"></i>
                <span>
                <h4>Online Support 24/7</h4>
                <p>Dedicated support</p>
                </span>
            </div>

            <div className="payment-service">
                <i className="fa fa-headphones"></i>
                <span>
                <h4>Payment Secure</h4>
                <p>100% secure payment</p>
                </span>
            </div>





        </div>
      
    </div>
  )
}

export default Services;
