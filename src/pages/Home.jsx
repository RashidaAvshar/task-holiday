import React from 'react';
// section
import Discount from '../component/Discount';
import Firstsec from '../component/Firstsec';
import Secondsec from '../component/Secondsec';
import Services from '../component/Services';
// import Shop from './Shop';
// import { data } from "./mockdata";
import Slidersec from "../component/Slidersec";
import Bestseller from "../component/Bestseller";
import Instagramsec from '../component/Instagramsec';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div>
      <Firstsec/>
      <Secondsec/>
   
      <Slidersec/>
      <Bestseller/>
      <Discount/>
      <Services/>
      <Instagramsec/>
      <Footer/>
      
  
    </div>
  )
}

export default Home
