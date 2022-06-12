import './Buttons.css'
import {useState} from 'react'



function Buttons (){
  const [count,setCount] = useState(0);

  const Previous=()=>{
    if (count < 3){
      setCount(count +1)
    };
  }

  const Next=()=>{
    if (count > 0){
      setCount(count -1)
    };
  }


  return (
    <div className='container'>
        <div className='button' onClick = { ()=> Previous ()}>
          Previous
        </div>
        <div className='button' onClick = { ()=> Next ()}>
          Next
        </div>
    </div>
  )
}

export default Buttons;
  