import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [ dataDetails, setDataDetails] = useState([])
    const {id} =useParams()
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setDataDetails(res.data)
        })
    }, [])

    const {image, title, price, description} = dataDetails
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt="" />
      <h1>{price}</h1>
    </div>
  )
}

export default Details;
