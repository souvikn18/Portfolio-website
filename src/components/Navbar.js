"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";
import React from 'react'

const DefaultNavbar = () => {
    return (
        <Navbar fluid className="xl:h-[80px] xl:px-[80px] bg-[#121212] sticky top-0 z-30 shadow-md opacity-90">
            <Navbar.Brand href="#" className="flex flex-col leading-3 pl-2">
            <span className="self-center whitespace-nowrap md:text-3xl text-2xl font-thin tracking-widest md:tracking-[8px] uppercase text-white">Souvik Nath</span>
            <span className="md:text-sm text-xs self-start text-white">MERN Stack Developer</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse >
                <Navbar.Link href="#" className="md:text-xl text-lg text-slate-200">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#about" className="md:text-xl text-lg text-slate-200">
                    About
                </Navbar.Link>
                <Navbar.Link href="#education" className="md:text-xl text-lg text-slate-200">Education</Navbar.Link>
                <Navbar.Link href="#projects" className="md:text-xl text-lg text-slate-200">Projects</Navbar.Link>
                <Navbar.Link href="#skills" className="md:text-xl text-lg text-slate-200">Skills</Navbar.Link>
                {/* <Navbar.Link href="#cetificates" className="text-xl text-slate-200">Certificates</Navbar.Link> */}
                {/* <Navbar.Link href="#contact" className="text-xl text-slate-200">Contact</Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default DefaultNavbar