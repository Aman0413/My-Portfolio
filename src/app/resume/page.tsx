import React from 'react'
import { IoMdBook } from "react-icons/io";

function resume() {
    return (
        <article className="resume" data-page="resume">
            <div className="relative pl-2 sm:pl-10 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[2rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-primary after:border-4 after:box-content after:border-[#383839] after:rounded-full sm:after:ml-[2rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <div className="text-lg font-bold pl-4">Master of Computer Application (MCA)</div>
                </div>
                <div className='flex flex-col gap-1 text-sm pl-4'>
                    <div className='text-yellow-primary'>
                        2023 - 2025
                    </div>
                    <div className='text-yellow-primary'>
                        <span className='text-text-secondary'>CGPA:</span> 7.5
                    </div>
                    <div className="text-text-secondary"> Shri Govindram Seksaria Institute of Technology and Science, Indore</div>
                </div>
            </div>

            <div className="relative pl-2 sm:pl-10 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[2rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-primary after:border-4 after:box-content after:border-[#383839] after:rounded-full sm:after:ml-[2rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <div className="text-lg font-bold pl-4">Bachelor of Computer Application (BCA)</div>
                </div>
                <div className='flex flex-col gap-1 text-sm pl-4'>
                    <div className='text-yellow-primary'>
                        2020 - 2023
                    </div>
                    <div className='text-yellow-primary'>
                        <span className='text-text-secondary'>CGPA:</span> 8.5
                    </div>
                    <div className="text-text-secondary"> Daksh Academy, Dhar</div>
                </div>
            </div>

            <div className="relative pl-2 sm:pl-10 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[2rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-primary after:border-4 after:box-content after:border-[#383839] after:rounded-full sm:after:ml-[2rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <div className="text-lg font-bold pl-4">Higher Secondary (12<sup>th</sup>)</div>
                </div>
                <div className='flex flex-col gap-1 text-sm pl-4'>
                    <div className='text-yellow-primary'>
                        2018 - 2019
                    </div>
                    <div className='text-yellow-primary'>
                        <span className='text-text-secondary'>PER:</span> 78.6%
                    </div>
                    <div className="text-text-secondary"> Board of Secondary Education Madhya Pradesh, Bhopal</div>
                </div>
            </div>

            <div className="relative pl-2 sm:pl-10 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[2rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-primary after:border-4 after:box-content after:border-[#383839] after:rounded-full sm:after:ml-[2rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <div className="text-lg font-bold pl-4">Higher School (10<sup>th</sup>)</div>
                </div>
                <div className='flex flex-col gap-1 text-sm pl-4'>
                    <div className='text-yellow-primary'>
                        2016 - 2017
                    </div>
                    <div className='text-yellow-primary'>
                        <span className='text-text-secondary'>PER:</span> 82.2%
                    </div>
                    <div className="text-text-secondary"> Board of Secondary Education Madhya Pradesh, Bhopal</div>
                </div>
            </div>



            <section className="skill">
                <h3 className="text-xl font-bold my-10">My skills</h3>
                <ul className="skills-list grid grid-cols-1 md:grid-cols-2 gap-6">
                    <li className="skills-item">
                        <div className="title-wrapper flex items-center justify-between mb-2">
                            <h5 className="text-lg font-semibold">Web design</h5>
                            <data className="text-gray-500 font-light" value="80">80%</data>
                        </div>
                        <div className="skill-progress-bg bg-gray-600 h-3 rounded-full">
                            <div className="skill-progress-fill bg-yellow-500 h-full rounded-full"></div>
                        </div>
                    </li>
                    {/* <!-- More li items for skills --> */}
                </ul>
            </section>
        </article >

    )
}

export default resume;