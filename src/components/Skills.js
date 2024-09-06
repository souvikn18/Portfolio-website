import React from 'react'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import bootstrap from '../assets/skills/bootstrap.png'
import tailwind from '../assets/skills/Tailwind CSS.png'
import jquery from '../assets/skills/jq.png'
import reactlogo from '../assets/skills/react.png'
import flowbitelogo from '../assets/skills/flowbite-logo-2.png'
import redux from '../assets/skills/redux.png'
import firebase from '../assets/skills/firebase.png'
import sql from '../assets/skills/sql.png'
import nodejs from '../assets/skills/nodejs.png'
import npm from '../assets/skills/npm.png'
import mongodb from '../assets/skills/mongodb.png'
import express from '../assets/skills/express.png'
import netlify from '../assets/skills/netlify.png'
import vercel from '../assets/skills/vercel-icon-light.png'
import render from '../assets/skills/renderco_logo.png'
import git from '../assets/skills/git.png'
import github from '../assets/skills/github.png'
import figma from '../assets/skills/figma.png'
import xd from '../assets/skills/xd.png'
import ps from '../assets/skills/ps.png'
import pr from '../assets/skills/pr.png'

const Skills = () => {
    return (
        <div className='bg-[#282828] py-16' id='skills'>
            <h1 className='text-white text-center text-4xl py-10'>TECHNICAL SKILLS</h1>
            <div className='lg:flex lg:flex-col lg:gap-16 lg:pt-10 lg:pb-20 lg:px-20 flex flex-col gap-10'>
                <div className='lg:flex lg:justify-center 2xl:gap-[150px] md:gap-[70px] lg:gap-[70px] flex justify-center flex-wrap lg:flex-nowrap gap-10'>
                    <img className='h-20 w-20' src={html} alt='...'/>
                    <img className='h-20 w-20' src={css} alt='...'/>
                    <img className='h-20 w-20' src={js} alt='...'/>
                    <img className='h-20 w-20' src={bootstrap} alt='...'/>
                    <img className='h-20 w-20' src={tailwind} alt='...'/>
                    <img className='h-20 w-20' src={jquery} alt='...'/>
                    <img className='h-20 w-20' src={reactlogo} alt='...'/>
                </div>
                <div className='lg:flex lg:justify-center 2xl:gap-[130px] md:gap-[80px] lg:gap-[80px] flex justify-center flex-wrap lg:flex-nowrap gap-16'>
                    <img className='h-20 w-20' src={flowbitelogo} alt='...'/>
                    <img className='h-20 w-20' src={redux} alt='...'/>
                    <img className='h-20 w-20' src={firebase} alt='...'/>
                    <img className='h-20 w-20' src={sql} alt='...'/>
                    <img className='h-20 w-20' src={nodejs} alt='...'/>
                </div>
                <div className='lg:flex lg:justify-center 2xl:gap-[130px] md:gap-[50px] lg:gap-[50px] flex justify-center flex-wrap lg:flex-nowrap gap-10'>
                    <img className='h-20 w-20' src={npm} alt='...'/>
                    <img className='h-20' src={mongodb} alt='...'/>
                    <img className='h-20' src={express} alt='...'/>
                    <img className='h-20 w-20' src={netlify} alt='...'/>
                    <img className='h-20 w-20' src={vercel} alt='...'/>
                    <img className='h-20 w-20 rounded-full' src={render} alt='...'/>
                    <img className='h-20 w-20' src={git} alt='...'/>
                </div>
                <div className='lg:flex lg:justify-center 2xl:gap-[130px] md:gap-[80px] lg:gap-[80px] flex justify-center flex-wrap lg:flex-nowrap gap-16'>
                    <img className='h-20 w-20' src={github} alt='...'/>
                    <img className='h-20 w-20' src={figma} alt='...'/>
                    <img className='h-20 w-20' src={xd} alt='...'/>
                    <img className='h-20 w-20' src={ps} alt='...'/>
                    <img className='h-20 w-20' src={pr} alt='...'/>
                </div>
            </div>
        </div>
    )
}

export default Skills