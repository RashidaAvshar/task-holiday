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


const Home = () => {
  return (
    <>
      <Firstsec/>
      <Secondsec/>
   
      <Slidersec/>
      <Bestseller/>
      <Discount/>
      <Services/>
      
    
    </>
  )
}

export default Home
