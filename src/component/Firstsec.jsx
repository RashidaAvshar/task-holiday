import React from 'react';
import image from "../image/FirstSec/category-1.jpg.webp";
import imageone from "../image/FirstSec/category-2.jpg.webp";
import imagetwo from "../image/FirstSec/category-3.jpg.webp";
import imagethree from "../image/FirstSec/category-4.jpg.webp";
import imagefour from "../image/FirstSec/category-5.jpg.webp";


const Firstsec = () => {
  return (
    <div className='section-first'>
        <figure className='women'>
            <img src={image} alt="section first" className='first'/>
        </figure>
        <figure className='men'>
            <img src={imageone} alt="section first" className='one' />
            <img src={imagetwo} alt="section first" className='one'/>
            <img src={imagethree} alt="section first" className='one' />
            <img src={imagefour} alt="section first" className='one' />
        </figure>
      
    </div>
  )
}

export default Firstsec;
