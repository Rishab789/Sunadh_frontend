import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HistorySec from './components/HistorySec'
import CourseDetails from './components/CourseDetails'
import Cards from './components/Cards'
import WhyChoose from './components/WhyChoose'
import LastSection from './components/LastSection'
import Copyright from './components/Copyright'



const App = () => {
    return (
        <div>

            <Navbar />
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


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)