import React from 'react'; 

import Data from '../../data/data.json';

import './Escena.css'


const Escena = () => {

     return(
       <div className ="escena">   
        {
             Data.map ( data => {
                  return (
                       <div className='box'>
                          {data.sentence}
                       </div>
                  )
             })
        }
        </div>
     )
}

export default Escena;

/*

import styled from '../../Styled/styled;

const Escena = () => {

     return(
       <div className ="escena">   
        {
             Data.map ( data => {
                  return (
                       <Box>
                          {data.sentence}
                       </Box>
                  )
             })
        }
        </div>
     )
}

export default Escena;
*/






