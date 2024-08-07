import React from 'react'
import { useState,useEffect } from 'react'


 
const buttonQuantity = (size,color,disabled,btnText) => {
    
   
  return (
<>


    <button >
        className={'btn btn-${color} btn-$size}'}
        disabled={disabled}
        {btnText}
    </button> 
    
     </>
  )
  

}


export default buttonQuantity