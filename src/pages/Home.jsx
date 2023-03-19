import React from 'react';
import Discount from '../component/Discount';
import Firstsec from '../component/Firstsec';
import Secondsec from '../component/Secondsec';
import Services from '../component/Services';
// import Shop from './Shop';
// import { data } from "./mockdata";
// // section
// import Firstsec from "./component/Firstsec";
// import Secondsec from "./component/Secondsec";
import Slidersec from "../component/Slidersec";
import Bestseller from "../component/Bestseller";

const Home = () => {
  return (
    <div>
      <Firstsec/>
      <Secondsec/>
   
      <Slidersec/>
      <Bestseller/>
      <Discount/>
      <Services/>
      
  
    </div>
  )
}

export default Home
