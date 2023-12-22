import React from 'react'
import SunadHistoryImage from '../public/assets/Software-training-institute.webp'
import bannerLine from '../public/assets/banner-line.png'

const HistorySec = () => {
    return (
        <section>
            <div className='md:flex px-10 md:px-12 pt-24 gap-x-14'>
                <div className='mb-10 md:mb-0 md:w-1/2'>
                    <img src={SunadHistoryImage} width={600} height={600} />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center  gap-y-10'>
                    <h2 className='md:text-5xl font-serif font-extrabold leading-tight'>Sunadh Technologies History</h2>
                    <div className='flex items-center'>
                        <img src={bannerLine} />
                        <p className='text-[.7rem] text-[#f27c1d] font-bold'>
                            SINCE 2004</p>
                    </div>
                    <p className='break-all text-[1rem] leading-loose'>Sunadh Technologies is one of the world’s <b>leading Classroom and Online training providers.</b> Our trainers are all certified and provide expert industry level guidance to keep up-to-date on latest technologies and best practices. Trainers use the Role Based Training approach to provide Online training. This gives the participant an understanding of how things are accomplished in real-time environment.</p>
                    <div>
                        <button className=' rounded-full px-5 py-2 text-[#f27c1d] bg-[#f5ba1c9e]'>KNOW MORE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistorySec