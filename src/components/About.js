import React from 'react'
import resume from '../assets/resume.pdf'
import self from '../assets/me.jpg'

const About = () => {
    return (
        <div className='h-[900px] lg:h-[600px] bg-gradient-to-b from-[#121212] to-[#282828] text-white lg:py-16' id='about'>
            <h1 className='text-4xl text-center pt-16'>ABOUT ME</h1>
            <div className='lg:flex lg:flex-row lg:justify-center lg:gap-20 lg:pt-16 pt-10 flex flex-col-reverse items-center gap-10'>
                <div className='w-[400px] px-8 py-8 lg:w-[600px] bg-[#282828] lg:px-8 lg:py-8 rounded-lg shadow-xl'>
                    <a href={resume} target='blank' className='bg-cyan-800 px-6 py-2 block mb-4 w-52 rounded-sm hover:bg-cyan-700 duration-300'>DOWNLOAD RESUME</a>
                    <p>I'm  a junior MERN-stack developer with the expertise of ReactJS, NodeJS, ExpressJS, MongoDB and many more technologies. Front end development as well as UI designing is my biggest strength. I love to create responsive, optimized web applications. Presently I'm learning React native for mobile development. <br/><br/> I'm a tech enthusiast and a quick learner, born and brought up in Kolkata, West Bengal, India. Completed my education from University of Calcutta. I'm very passionate about designing and love to pay attention to the smallest details.</p>
                </div>
                <div >
                    <img className='lg:w-96 lg:h-96 rounded-full w-52 h-52' alt='...' src={self}/>
                </div>
            </div>
        </div>
    )
}

export default About