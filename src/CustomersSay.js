import React from 'react'
import RevCard from './RevCard'


const CustomersSay = () => {
    const reviewes =require('./reviewes.json')

  return (
    <section className='customerssay'>
        {reviewes.map((rev,index) => (
           <RevCard
           key={index}
           stars={rev.stars}
           image={rev.image}
           name={rev.name}
           review={rev.review}/>
        ))}
    </section>
  )
}

export default CustomersSay