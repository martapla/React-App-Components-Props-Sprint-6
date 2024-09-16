import React from 'react'
import './Buttons.css'

function Buttons(props){
  const count = props.count
  const setCount = props.setCount

  const Previous = () => {
    if (count > 0)
      setCount(c => c-1)
  }

  const Next = () => {
    if (count < 3)
      setCount(c => c+1)
  }


  return (
    <div className='container'>
        <div className='button' onClick={() => Previous()}>
          Previous
        </div>
        <div className='button' onClick={() => Next()}>
          Next
        </div>
    </div>
  )
}

export default Buttons;
  