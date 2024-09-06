'use client';

import { Carousel } from 'flowbite-react';
import React from 'react'
import img1 from '../assets/pexels-kevin-ku-92347-577585.jpg'
import img2 from '../assets/pexels-danny-meneses-340146-943096.jpg'
import img3 from '../assets/pexels-pixabay-256502.jpg'


function DefaultCarousel() {
    return (
    <div className='h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px] opacity-50'>
        <Carousel slideInterval={5000}>
            <img alt="..." src={img1}/>
            <img alt="..." src={img2}/>
            <img alt="..." src={img3}/>
    </Carousel>
    </div>
    )
}

export default DefaultCarousel;