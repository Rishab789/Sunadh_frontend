import React from 'react'
import bannerLine from '../public/assets/banner-line.png'

const CourseDetails = () => {
    return (
        <section>
            <div className='md:flex justify-between items-center mt-28 px-10 md:px-32'>
                <div className=''>
                    <p className='text-2xl md:text-5xl font-serif font-extrabold leading-tight'>100% Placement Courses</p>
                    <div className='flex items-center mt-12 mb-14 pt-5 md:pt-0'>
                        <img src={bannerLine} /><p className='text-[.7rem] text-[#f27c1d] font-bold'>
                            EXPERTS IN EVERY SUBJECT</p>
                    </div>
                    <ul className='flex flex-col gap-y-2 pl-5 md:pl-0'>
                        <li>Economical cost of course</li>
                        <li>Highly experienced expert</li>
                        <li>Practical session for better understanding</li>
                        <li>Easy to understand curriculum</li>
                    </ul>
                </div>
                <div className='md:w-1/2 md:mt-[-5rem]  mt-7'>
                    <ul className='flex flex-col gap-y-10 list-none border rounded-lg shadow-xl p-10'>
                        <li><i class="fa-solid fa-arrow-right bg-[#f27c1d] text-white p-2 rounded-full"></i> Online Training</li>
                        <li><i class="fa-solid fa-arrow-right bg-[#f27c1d] text-white p-2 rounded-full "></i> Class Room Training</li>
                        <li><i class="fa-solid fa-arrow-right bg-[#f27c1d] text-white p-2 rounded-full"></i> Corporate Training</li>
                        <li><i class="fa-solid fa-arrow-right bg-[#f27c1d] text-white p-2 rounded-full"></i> 30-60 Days Courses</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CourseDetails