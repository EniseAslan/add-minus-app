import React from 'react'
import PropTypes from 'prop-types'

const ButtonQuantity =({
  style,
  innerText,
  onClick,
  className
})=>{
return(
  <button onClick={onClick} className ={className} style={style}
 >
  {innerText}

  </button>
  

)

}


export default ButtonQuantity