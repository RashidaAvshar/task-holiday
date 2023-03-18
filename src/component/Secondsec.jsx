import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const Secondsec = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
  return (
    <div className='container'>
        <div className='second-nav'>
        <div className='new-product'>
        <h3>NEW PRODUCT</h3>
        <span className='line'></span>
        </div>  
        <div className='tab'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Women's" value="2" />
            <Tab label="Men's" value="3" />
            <Tab label="Kids" value="4" />
            <Tab label="Accessories" value="5" />
            <Tab label="Cosmetics" value="6" />

          </TabList>
        </Box>
        <TabPanel value="1">All</TabPanel>
        <TabPanel value="2">Women's</TabPanel>
        <TabPanel value="3">Men's</TabPanel>
        <TabPanel value="4">Kids</TabPanel>
        <TabPanel value="5">Accessories</TabPanel>
        <TabPanel value="6">Cosmetics</TabPanel>
      </TabContext>
    </Box>
        </div>
   
        </div>

        



    <div className='card'>

        </div>



      
    </div>
  )
}

export default Secondsec;
