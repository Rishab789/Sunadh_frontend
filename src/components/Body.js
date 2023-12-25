import React from 'react'
import Hero from './Hero'
import HistorySec from './HistorySec'
import CourseDetails from './CourseDetails'
import Cards from './Cards'
import WhyChoose from './WhyChoose'
import LastSection from './LastSection'
import Copyright from './Copyright'

const Body = () => {
    return (
        <div>
            <Hero />
            <HistorySec />
            <CourseDetails />
            <Cards />
            <WhyChoose />
            <LastSection />
            <Copyright />

        </div>
    )
}

export default Body