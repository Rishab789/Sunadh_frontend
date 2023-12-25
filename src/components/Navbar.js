import LOGO from '../public/assets/sunadh-removebg-preview.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [dropmenu, setDropMenu] = useState(false);


    const scrollBehaviour = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)

        }
        else {
            setNavbar(false)

        }
    }

    window.addEventListener('scroll', scrollBehaviour)

    function toggleHandler() {
        setDropMenu(!dropmenu)

    }




    return (


        <header className={navbar ? 'sticky top-0 z-10  duration-500 shadow-lg w-full  md:px-32 font-sans  bg-white h-20 stick' : 'sticky top-0  w-full  md:px-32 font-sans  bg-white h-20 stick'}>
            <div className='h-20 md:h-20   flex flex-col justify-between px-0 md:px-5 md:flex-row  md:flex md:justify-between md:items-center '>
                <div className=' md:block flex justify-between items-center '>
                    <Link to='/'> <img src={LOGO} className='cursor-pointer' /></Link>
                    <div className='block pr-2 md:hidden'>

                        <i class="fa-solid fa-bars text-2xl" onClick={() => {
                            setVisible(!visible)

                        }}></i>
                    </div>
                </div>
                <nav className={visible ? 'bg-[#f9f9f9]  px-8 w-full h-screen absolute  md:px-0  md:block md:w-[50%] md:static md:h-10 ' : "hidden md:px-0  md:block md:w-[50%] md:static md:h-10 "}>
                    <div className='md:hidden float-right'>
                        <i class="fa-solid fa-xmark text-4xl" onClick={() => {
                            setVisible(!visible)
                        }}></i>
                    </div>
                    <ul className='list-none flex flex-col md:flex-row  md:flex gap-14 text-base cursor-pointer md:mt-0 mt-8 '>
                        <Link to='/'><li className='hover:text-gray-400 transition'>Home</li></Link>
                        <Link to='/about'> <li className='hover:text-gray-400'>About</li></Link>
                        <li className=' hover:text-gray-400 group relative course' onClick={toggleHandler}>Courses <i class="fa-solid fa-angle-down text-xs"> </i>
                            <ul className={dropmenu ? 'absolute left-[-.5rem] md:border-t-4 md:hidden bg-[#f9f9f9] text-black list-none  md:w-[300%] text-start px-10 list1 ' : 'absolute left-[-2.5rem] md:border-t-4  md:border-blue-600 hidden list bg-white text-black list-none md:w-[300%] text-start px-10 md:group-hover:block'} >
                                <li>Tableau</li>
                                <li>Azure Data Engineering</li>
                                <li>Snowflake</li>
                                <li>Azure Data Factory</li>
                                <li>Blockchain</li>
                                <li>Fullstack Developement</li>
                                <li>Python Fullstack</li>
                                <li>MERN Stack</li>
                                <li>Power BI</li>
                                <li>AWS</li>
                                <li>DevOps</li>


                            </ul>


                        </li>

                        <Link to='/contact'> <li className='hover:text-gray-400'>Contact</li></Link>
                        <li className='hover:text-gray-400'>Blog <i class="fa-solid fa-angle-down text-xs"></i></li>
                    </ul>

                </nav>

            </div>

        </header>




    )
}

export default Navbar