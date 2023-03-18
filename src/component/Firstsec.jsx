import React from 'react';
import image from "../image/FirstSec/category-1.jpg.webp";
import imageone from "../image/FirstSec/category-2.jpg.webp";
import imagetwo from "../image/FirstSec/category-3.jpg.webp";
import imagethree from "../image/FirstSec/category-4.jpg.webp";
import imagefour from "../image/FirstSec/category-5.jpg.webp";


const Firstsec = () => {
  return (
    <div className='section-first'>
        <div className='first-section-main' style={{backgroundImage: `url('${image}')`}}>
          <h2>Women’s fashion</h2>
          <h4>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</h4>
        </div>
        <div className='first-section-advanced'>
          <div style={{backgroundImage: `url('${imageone}')`}}>
          <h2>Men’s fashion</h2>
          <h4>description</h4>
          </div>
          <div style={{backgroundImage: `url('${imagetwo}')`}}>
          <h2>Kid’s fashion</h2>
          <h4>description</h4>
          </div>
          <div style={{backgroundImage: `url('${imagethree}')`}}>
          <h2>Cosmetics</h2>
          <h4>description</h4>
          </div>
          <div style={{backgroundImage: `url('${imagefour}')`}}>
          <h2>Accessories</h2>
          <h4>description</h4>
          </div>
        </div>
    </div>
  )
}

export default Firstsec;
