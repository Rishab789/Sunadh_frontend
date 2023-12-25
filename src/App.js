import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Body from './components/Body'

import TopHead from './components/TopHead'
import About from './components/About'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'



const App = () => {
    return (
        <div>

            <TopHead />

            <Navbar />

            <Outlet />



        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },

            {
                path: '/about',
                element: <About />
            },

            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)