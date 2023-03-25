import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const marks = [
  {
    value: 0,
    label: '0 $',
  },
  {
    value: 20,
    label: '20 $',
  },
  {
    value: 30,
    label: '30 $',
  },
  {
    value: 40,
    label: '40 $',
  },
  {
    value: 50,
    label: '50 $',
  },
  {
    value: 100,
    label: '100 $',
  },
];

function valuetext(value) {
  return `${value}$`;
  
}

// const Card = ({image, title, price, description}) =>{
//   return (
//     <div className='card-section2'>
//     <img src={image} alt="product" />
//     <p>{title}</p>
//     <p>{description}</p>
//     <div className='icon'>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     </div>
//     <span> <span>$</span> {price}</span>
    
// </div>
//   )
// }


const Shop = () => {
  // const [data, setData] = useState([]);
  //   useEffect(()=>{
  //       axios.get("https://fakestoreapi.com/products").then((res)=>{
  //           setData(res.data)
  //           console.log(res.data)
  //       })
  //   },[])

  return (
    <div className='container'>
      <div className="accordion">
      <Accordion>
        <h4>CATEGORIES</h4>
        <div className='line'></div>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography></Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Women
          {/* {data.map(item=>(
          <Card title = {item.title.slice(0, 10)} image = {item.image} price = {item.price} description = {item.description.slice(0,10)}/>
        ))} */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>Coat</li>
              <li>Jacket</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Men</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>Coat</li>
              <li>Jacket</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Kids</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>Coat</li>
              <li>Jacket</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accessories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>Coat</li>
              <li>Jacket</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cosmetic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
              <li>Coat</li>
              <li>Jacket</li>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Jeans</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        
      />
    </Box>


    <ul>
      <h4>SHOP BY SIZE</h4>
      <div className='line'></div>
      <li>
      <Checkbox {...label} defaultChecked size="small" /> 
      <span>XXS</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>XS</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>S</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>M</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>L</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>XL</span>
      </li>
    </ul>
    <ul>
      <h4>SHOP BY SIZE</h4>
      <div className='line'></div>
      <li>
      <Checkbox {...label} defaultChecked size="small" /> 
      <span>Black</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Whites</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Reds</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Greys</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Blues</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Beige Tones</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Greens</span>
      </li>
      <li>
      <Checkbox {...label} defaultChecked size="small" />
      <span>Yellows</span>
      </li>
    </ul>
      </div>





     
    </div>
  )
}

export default Shop;
