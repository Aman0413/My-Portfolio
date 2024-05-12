import React from 'react'
import { IoMdBook } from "react-icons/io";

function resume() {

    const skills = [
        {
            id: 1,
            name: 'Web Development',
            percentage: '90%',
        },
        {
            id: 2,
            name: 'React',
            percentage: '90%'
        },
        {
            id: 3,
            name: 'Node.js',
            percentage: '80%'
        },
        {
            id: 4,
            name: 'Express.js',
            percentage: '80%'
        },
        {
            id: 5,
            name: 'MongoDB',
            percentage: '80%'
        },
        {
            id: 6,
            name: 'Next.js',
            percentage: '80%'
        },
        {
            id: 7,
            name: 'Tailwind CSS',
            percentage: '90%'
        },
        {
            id: 8,
            name: 'Git/Github',
            percentage: '90%'
        },
    ]
    return (
        <article className="resume  py-6 pb-16 md:pb-5" data-page="resume">
            <div className="flex flex-col space-y-3">
                <h1 className="text-3xl font-semibold">Resume</h1>
                <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
            </div>
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
                    <div className="text-lg font-bold pl-4">High School (10<sup>th</sup>)</div>
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



            {/* Skill section start */}
            <section className=" mt-14 ">
                <div className=' text-2xl font-semibold my-5 '>My Skills</div>
                <div className='bg-[#222224] shadow-xl rounded-2xl border-[0.2px] border-[#383839] px-2'>

                    {
                        skills.map((item) => {
                            return (
                                <div key={item.id} className="md:w-[50%] pl-6 my-3">
                                    <div className="flex space-x-6 py-2">
                                        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">{item.name}</span>
                                        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">{item.percentage}</span>
                                    </div>
                                    <div className=''>
                                        <div className="mt-2 h-2 relative w-full rounded-full overflow-hidden">
                                            <div className=" w-full h-full bg-[#4b4b4b] absolute "></div>
                                            <div className={`h-full skill-progress-fill absolute w-[${item.percentage}]`}></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>


            </section>
            {/* Skill section end */}

        </article >

    )
}

export default resume;