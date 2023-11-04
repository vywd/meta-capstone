import React from 'react'

const HighlitsCard = (props) => {
  return (
    <div className='highlitscard'>
        <img className='card-image' src={props.img} alt="" />
        <div className='card-nameprice'>
            <p className='card-name'>{props.name}</p>
            <p className='card-price'>{props.price}</p>
        </div>
        <p className='card-discr'>{props.discr}</p>
        <a href="">Order Delivery</a>
    </div>
  )
}

export default HighlitsCard