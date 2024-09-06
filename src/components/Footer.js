import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const date = new Date();
    const year= date.getFullYear()
    return (
        <footer className='bg-[#121212] md:flex md:justify-center md:gap-[50%] md:py-6 md:flex-row flex gap-4 flex-col-reverse py-6'>
            <div className='text-center md:text-start'>
                <p className="text-white text-lg">© Copyright {year}</p>
                <p className='text-gray-400 text-sm'>Made with ❤ by Souvik Nath</p>
            </div>
            <div className='flex justify-center items-center md:gap-[20%] gap-[10%]'>
                <a href='https://wa.me/+918240666053' target='blank' className='text-green-400'><FaWhatsapp className='h-7 w-7'/></a>
                <a href='https://www.linkedin.com/in/souvik-nath-923ba6204/' target='blank' className='text-blue-500'><FaLinkedin className='h-7 w-7'/></a>
                <a href='https://github.com/souvikn18' target='blank' className='text-white'><FaGithub className='h-7 w-7'/></a>
                <a href='https://x.com/SouvikN36948133' target='blank' className='text-white'><FaXTwitter className='h-7 w-7'/></a>
                <a href='https://www.youtube.com/@furydezz' target='blank' className='text-red-600'><FaYoutube className='h-7 w-7'/></a>
            </div>
        </footer>
    )
}

export default Footer