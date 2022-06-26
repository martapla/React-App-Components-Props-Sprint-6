import React from 'react'; 

import Data from '../../data/data.json';

import './Escena.css'


const Escena = (props) => {
     const count = props.count;

     return(
       <div className ="escena">   
        {
             Data.map ((data, index) => {
                  const isActive = count === index

                  return (
                       <div id={'escena-' + index} className={'box' + (isActive ? ' highlighted' : '')}>
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






