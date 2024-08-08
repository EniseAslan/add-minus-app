import React from 'react'
import PropTypes from 'prop-types'

const ButtonQuantity =({
  style,
  innerText,
  onClick,
  className,
  disabled
})=>{
return(
  <button onClick={onClick} className ={className} style={style} disabled={disabled}
 >
  {innerText}

  </button>
  

)

}


export default ButtonQuantity