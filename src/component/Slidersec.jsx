import React from 'react';
import slider from "../image/slidersec/banner-1.jpg.webp";
import { Carousel } from "react-responsive-carousel";


const Slidersec = () => {
  return (
    
    <div className='slider-back' style={{backgroundImage: `url('${slider}')`}}>
    <div className="container">
    <Carousel autoPlay className='carusel-play'>
    <div className='carousel'>
      <span>The Chloe Collection</span>
      <h2>The project Jacket</h2>
      <a href="#">shop now</a>
    </div>
    <div className='carousel'>
      <span>The Chloe Collection</span>
      <h2>The project Jacket</h2>
      <a href="#">shop now</a>
    </div>
    <div className='carousel'>
      <span>The Chloe Collection</span>
      <h2>The project Jacket</h2>
      <a href="#">shop now</a>
    </div>   
  </Carousel> 
        </div>     
    </div>
  )
}

export default Slidersec;
