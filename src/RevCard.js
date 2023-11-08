import React from 'react'

const RevCard = (props) => {
  return (
    <div className='revcard'>
        <span className='stars'>{props.stars}</span>
        <div className='fotoname'>
            <img src={props.image} alt="" className='fotorevcard' />
            <div className='namerevcard'>{props.name}</div>
        </div>
        <p className='review'>{props.review}</p>
    </div>
  )
}

export default RevCard