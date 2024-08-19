import React from 'react'
import { CarouselSpacing } from '../components/CarouselCard'
import { Motion } from '../archive/Motion'

const Hero = () => {
  return (
    <section className='h-full w-full'>
        <div className='text-center p-2 py-10'>
            <CarouselSpacing />
            {/* <Motion /> */}
        </div>
    </section>
  )
}

export default Hero