import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Shop = ({img, title, description, price}) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/").then((res)=>{
          setData(res.data)
      })
  },[])
  return (
    <div className='container'>
      <div className="card-box">
    <div className='card'>
    <img src={img} alt="product" />
        <p>{title}</p>
        {/* <p>{description}</p> */}
        <div className='icon'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <span> <span>$</span> {price} </span>
        
    </div>
    </div>
    </div>
  )
}

export default Shop
