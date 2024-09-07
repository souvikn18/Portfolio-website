"use client";

import React from 'react'
import { Timeline } from 'flowbite-react'
import {HiCalendar} from 'react-icons/hi2'

const Education = () => {
    return (
        <div className='px-8 lg:pt-28 bg-[#282828] flex flex-col items-center' id='education'>
            <h1 className='md:text-4xl text-2xl text-center md:py-16 py-6 text-white'>EDUCATION</h1>
            <Timeline className='mt-10' >
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content className='px-4'>
                        <Timeline.Time>July 2022</Timeline.Time>
                        <Timeline.Title className='text-slate-300'>MSc in Computer Science</Timeline.Title>
                        <Timeline.Body>
                            University of Calcutta &nbsp; &nbsp; CGPA: 7.3|10
                            <ul className='text-slate-100 list-disc list-inside'>
                                <li>Software development: How to write code and develop software</li>
                                <li>Computer systems: How to design and structure a computer</li>
                                <li>Algorithms and computation: How to use algorithms to design advanced devices that can
                                perform human-like functions</li>
                            </ul>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar}/>
                    <Timeline.Content className='px-4'>
                        <Timeline.Time>August 2019</Timeline.Time>
                        <Timeline.Title className='text-slate-300'>BSc in Computer Science</Timeline.Title>
                        <Timeline.Body>
                            University of Calcutta &nbsp; &nbsp; Percentage: 60.38
                            <ul className='text-slate-100 list-disc list-inside'>
                                <li>Introduction computer programming with C and C++</li>
                                <li>Advance mathematical algorithms using Graph theory</li>
                                <li>Advanced DSA and algorithms to optimize any program according to space and time complexity.</li>
                            </ul>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>

    )
}

export default Education