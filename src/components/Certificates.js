import React from 'react'
import ineuron from '../assets/ineuron.png'
import module1 from '../assets/module1.png'
import capstone1 from '../assets/capstone1.png'

const Certificates = () => {
    return (
        <div className='bg-[#121212] lg:py-16' id='cetificates'>
            <h1 className='text-4xl text-center py-16 text-white'>CERTIFICATES</h1>
            <div className='flex lg:flex-row flex-col gap-10 lg:justify-center lg:px-16 lg:overflow-x-scroll items-center lg:pb-16 pb-24 px-6'>
                <a href='https://learn.ineuron.ai/certificate/419d7a27-9751-4c91-9d63-eb8a3f3a24ce' target='blank'><img className='lg:w-[600px] lg:h-[400px] w-[400px] h-[250px]' src={ineuron}/></a> 
                <a href='https://certificates.almabetter.com/en/verify/40526697037074' target='blank'><img className='lg:w-[600px] lg:h-[400px] w-[400px] h-[250px]' src={module1}/></a>
                <a href='https://certificates.almabetter.com/en/verify/84809510434852' target='blank'><img className='lg:w-[600px] lg:h-[400px] w-[400px] h-[250px]' src={capstone1}/></a>
            </div>
        </div>
    )
}

export default Certificates