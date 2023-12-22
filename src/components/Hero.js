import React from 'react'
import bannerLine from '../public/assets/banner-line.png'
import AWS from '../public/assets/AWS-course.webp'
import Azure from '../public/assets/Azure-Course-Hyderabad.webp'
import AzureData from '../public/assets/Azure-Data-Factory-3.webp'
import banner from '../public/assets/banner.webp'
import DevOps from '../public/assets/DevOps-Training-Hyderabad-1.webp'
import FullStack from '../public/assets/Fullstack-Development.webp'
import mern from '../public/assets/mern.webp'
import MuleSoft from '../public/assets/Mulesoft.webp'
import PowerBI from '../public/assets/Power-BI-course.webp'
import Python from '../public/assets/Python-Development.webp'
import Salesforce from '../public/assets/salesforce.webp'
import SnowFlake from '../public/assets/Snowflake-Course-hyderabad.webp'
import Tableau from '../public/assets/Tableau-Course-Hyderabad.webp'


const Hero = () => {
    return (
        <div className='px-7 md:flex bg-[#f9f9f9] justify-center md:px-28'>
            {/* Left Div  */}
            <div className='w-full md:w-1/2 mr-5'>
                <div className='flex items-center mt-12 mb-14 pt-5 md:pt-0'>
                    <img src={bannerLine} /><p className='text-[.7rem] text-[#f27c1d] font-bold'>SUNADH TECHNOLOGIES</p>
                </div>
                <div>
                    <h1 className='text-2xl  md:text-6xl font-serif font-extrabold mb-2 leading-tight'>Best Software Training Institute Hyderabad</h1>
                    <p className='break-all text-[1rem] md:w-[75%] mb-10'>Looking for high quality and certified training in IT and software courses? Sunadh Technologies is a pioneer in the field of delivering real-time training in IT & software courses by certified trainers.</p>
                </div>
                <div className='grid grid-cols-3 mb-10 md:mb-7 gap-y-12 md:gap-y-10'>
                    <img src={Tableau} />
                    <img src={PowerBI} />
                    <img src={SnowFlake} />
                    <img src={AWS} />
                    <img src={AzureData} />
                    <img src={Azure} />
                    <img src={FullStack} />
                    <img src={MuleSoft} />
                    <img src={Python} />
                    <img src={DevOps} />
                    <img src={Salesforce} />
                    <img src={mern} />
                </div>
                <div>
                    <button className=' mb-5 md:mb-0 border mr-16 w-44 h-16 rounded-full bg-[#f27c1d] text-white'>FREE DEMO CLASS</button>
                    <button className='border h-16 w-32 rounded-full bg-[#f5ba1c] text-white'>ABOUT US</button>
                </div>

            </div>
            {/* Right Div  */}
            <div className='mt-14'>
                <img src={banner} />
            </div>
        </div>
    )
}

export default Hero