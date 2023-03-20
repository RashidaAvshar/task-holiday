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


const Shop = ({img, title, description, price}) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products/").then((res)=>{
          setData(res.data)
      })
  },[])
  return (
    <div className='container'>
       <Accordion>
        <h4>CATEGORIES</h4>
        <div className='line'></div>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Women</Typography>
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

      <Box width={300}>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
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




      <div className="card-box">
    <div className='card'>
    <img src={img} alt="product" />
        <p>{title}</p>
        <p>{description}</p>
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
