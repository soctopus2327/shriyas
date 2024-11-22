import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, description, live, source, title} = props;
   const ic = live==='disabled'? 'fa fa-eye-slash': 'fa fa-safari'
   const tx = live==='disabled'? 'Unavailable': 'Live Demo'
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} style={{height: '17rem',overflow:'hidden'}}/>
         <br></br>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <br></br>
         <h1 style={{fontSize: '1rem', fontWeight:'normal', textAlign:'center', margin:'auto 1rem auto 1rem'}}>{description}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={tx} icon={ic}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;