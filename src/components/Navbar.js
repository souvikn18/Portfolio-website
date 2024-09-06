"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";
import React from 'react'

const DefaultNavbar = () => {
    return (
        <Navbar fluid className="xl:h-[80px] xl:px-[80px] bg-[#121212] sticky top-0 z-20 shadow-md opacity-90">
            <Navbar.Brand href="#" className="flex flex-col leading-3">
            <span className="self-center whitespace-nowrap text-3xl font-thin tracking-widest text-white">Souvik Nath</span>
            <span className="text-sm self-start text-white">MERN Stack Developer</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse >
                <Navbar.Link href="#" className="text-xl text-slate-200">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#about" className="text-xl text-slate-200">
                    About
                </Navbar.Link>
                <Navbar.Link href="#education" className="text-xl text-slate-200">Education</Navbar.Link>
                <Navbar.Link href="#projects" className="text-xl text-slate-200">Projects</Navbar.Link>
                <Navbar.Link href="#skills" className="text-xl text-slate-200">Skills</Navbar.Link>
                {/* <Navbar.Link href="#cetificates" className="text-xl text-slate-200">Certificates</Navbar.Link> */}
                {/* <Navbar.Link href="#contact" className="text-xl text-slate-200">Contact</Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default DefaultNavbar