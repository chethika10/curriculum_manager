import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate =useNavigate();
    const goBack=()=>navigate(-1);
  return (
    <div>Unauthorized 
        <br/>
        <button onClick={goBack} >go back</button>
    </div>
  )
}

export default Unauthorized