import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';



const Card = ({image, title, price, description}) =>{
  return (
    <div className='card-section2'>
    <img src={image} alt="product" />
    <p>{title}</p>
    <p>{description}</p>
    <div className='icon'>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <span> <span>$</span> {price}</span>   
    
</div>
  )
}



const Secondsec = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    },[])
   
    
  return (
    <div className='container'>
                   
      
        <Box className = 'section3-home-box' sx={{ width: '100%', typography: 'body1' }}>
     
      <TabContext value={value}>
        <Box className = {'second-nav'} sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <div className="new-product">
        <h3>NEW PRODUCT</h3>
        <span></span>
        </div>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Women's" value="2" />
            <Tab label="Men's" value="3" />
            <Tab label="Kids" value="4" />
            <Tab label="Accessories" value="5" />
            <Tab label="Cosmetics" value="6" />
          </TabList>
        </Box>
        
        <TabPanel className='tab-panel' value="1">            
      {data.map(item=>(
          <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
        ))}
        </TabPanel>

        <TabPanel  className='tab-panel'  value="2">
        {data.map(item=>{
         if(item.category === "women's clothing"){
        return <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
 }
        }
         
        )}
        </TabPanel>


        <TabPanel  className='tab-panel'  value="3">
        {data.map(item=>{
        if(item.category === "men's clothing"){
        return <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
 }
        }
         
        )}
        </TabPanel>


        <TabPanel  className='tab-panel'  value="4">
        {data.map(item=>{
        if(item.category === "electronics"){
        return <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
 }
        }
         
        )}
        </TabPanel>


        <TabPanel  className='tab-panel'  value="5">
        {data.map(item=>{
        if(item.category === "jewelery" ){
        return <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
 }
        }
         
        )}
        </TabPanel>


        <TabPanel  className='tab-panel'  value="6">
        {data.map(item=>{
        if(item.category === "women's clothing" ){
        return <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
 }
        }
         
        )}
        </TabPanel>


      </TabContext>
     
    </Box> 
    
      

        
    
    
    </div>
  )
}

export default Secondsec;
