import React from 'react'
import OnlineTraining from '../public/assets/online-software-training-center-in-hyderabad.webp'
import bannerLine from '../public/assets/banner-line.png'

const LastSection = () => {
    return (
        <section className='mt-10 px-10 md:px-28'>
            <div className='md:flex justify-around '>
                <div className='md:mr-16 md:mb-0 mb-5'>
                    <img src={OnlineTraining} width={500} height={500} />
                </div>
                <div className='md:w-1/2'>
                    <p className='md:text-5xl font-serif font-extrabold mb-8'>
                        Learn From The Anywhere of Globe!
                    </p>
                    <div className='flex items-center mb-8'>
                        <img src={bannerLine} />
                        <p className='text-[.7rem] text-[#f27c1d] font-bold'>

                            ONLINE TRAINING CENTER</p>
                    </div>
                    <p className='mb-2'>We are committed to delivering value to our students from start to finish.

                    </p>
                    <ul className='md:ml-6 mb-10'>
                        <li>All courses are delivered by certified trainers</li>
                        <li>We provide the best training in the industry
                        </li>
                        <li>We provide high-end technology courses
                        </li>
                        <li>We train 150,000+ students per year
                        </li>
                        <li>We offer classroom, online training courses

                        </li>
                    </ul>
                    <div>
                        <button className=' rounded-full px-5 py-2 text-[#f27c1d] bg-[#f5ba1c9e]'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastSection