import React from 'react';
import insta1 from "../image/instagramsec/insta-1.jpg.webp";
import insta2 from "../image/instagramsec/insta-2.jpg.webp";
import insta3 from "../image/instagramsec/insta-3.jpg.webp";
import insta4 from "../image/instagramsec/insta-4.jpg.webp";
import insta5 from "../image/instagramsec/insta-5.jpg.webp";
import insta6 from "../image/instagramsec/insta-6.jpg.webp";


const Instagramsec = () => {
  return (
    <div>
        <div className="insta-box">
        <div className='instagram' style={{backgroundImage: `url('${insta1}')`}}>
        <i className="fa-brands fa-instagram"></i>
        </div>
        
        <div className='instagram' style={{backgroundImage: `url('${insta2}')`}}></div>
        <div className='instagram' style={{backgroundImage: `url('${insta3}')`}}></div>
        <div className='instagram' style={{backgroundImage: `url('${insta4}')`}}></div>
        <div className='instagram' style={{backgroundImage: `url('${insta5}')`}}></div>
        <div className='instagram' style={{backgroundImage: `url('${insta6}')`}}></div>   
        </div>
    </div>
  )
}

export default Instagramsec;


