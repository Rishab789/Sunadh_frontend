import React from 'react'
import bannerLine from '../public/assets/banner-line.png'
import one from '../public/assets/1.png'
import two from '../public/assets/2.png'
import three from '../public/assets/3.png'
import four from '../public/assets/4.png'
import five from '../public/assets/5.png'
import six from '../public/assets/6.png'
import seven from '../public/assets/7.png'
import eight from '../public/assets/8.png'
import nine from '../public/assets/9.png'
import ten from '../public/assets/10.png'

const WhyChoose = () => {
    return (
        <section className='mt-10 '>
            <div>
                <div className='px-10 md:px-20'>
                    <h2 className='md:text-5xl font-serif font-extrabold leading-tight mb-6'>Why Choose Us</h2>

                    <div className='flex items-center mb-8'>
                        <img src={bannerLine} />
                        <p className='text-[.7rem] text-[#f27c1d] font-bold'>
                            WE ARE EXPERTS IN MARKET</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center '>
                    <div className='md:grid grid-cols-5 px-20  mb-10 gap-x-10 gap-y-7 icon'>
                        <div><img src={one} />
                            <p>Certified Trainers</p></div>
                        <div><img src={two} />
                            <p>Class Room Trainings</p></div>
                        <div><img src={three} />
                            <p>Online Training</p></div>
                        <div><img src={four} />
                            <p>1,50,000+ Trained</p></div>
                        <div><img src={five} />
                            <p>Mock Interviews</p></div>
                        <div><img src={six} />
                            <p>24/7 Support</p></div>
                        <div><img src={seven} />
                            <p>Assignments</p></div>
                        <div><img src={eight} />
                            <p>Job Placements</p></div>
                        <div><img src={nine} />
                            <p>Live Projects</p></div>
                        <div><img src={ten} />
                            <p>Resume Sessions</p></div>
                    </div>
                    <div className='mx-5 h-[19rem] md:mx-14  rounded-3xl md:h-[13rem] bg-[#F5BA1C] pl-10 md:pl-32 pt-10 md:pt-10'>
                        <p className='text-[1.5rem] md:text-4xl font-serif font-extrabold leading-tight text-white md:mb-0 mb-9'>Schedule a Free Demo Class With us Today!</p>
                        <div className='md:flex items-center md:mt-10 '>
                            <p className='text-white md:mr-20 md:mb-0 mb-4'> You can get 2 free Demo Classes of any course of us. For demo classes reach us.</p>
                            <button className=' mb-5 md:mb-0 mr-16 w-44 h-16 rounded-full bg-white text-[#F5BA1C]'>FREE DEMO CLASS</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default WhyChoose