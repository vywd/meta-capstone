import React from 'react'
import HighlitsCard from './HighlitsCard'
//import data from './specials.json'

const Specials = () => {
const data = require('./specials.json')

  return (
    <section className='specialssection'>
        <div className='specialsup'>
            <h1>Specials</h1>
            <a href="">Online Menu</a>
        </div>
        <div className='specialsdown'>
            {data.map((special, index) => (
                <HighlitsCard
                key={index}
                img={special.img}
                name={special.name}
                price={special.price}
                discr={special.discr}/>
            ))}
        </div>
    </section>
  )
}

export default Specials