import LOGO from '../public/assets/sunadh-removebg-preview.png'

import { useState } from 'react'



const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [navbar, setNavbar] = useState(false)


    const scrollBehaviour = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)

        }
        else {
            setNavbar(false)

        }
    }

    window.addEventListener('scroll', scrollBehaviour)


    return (


        <header className={navbar ? 'sticky top-0  duration-500 shadow-lg w-full  md:px-32 font-sans  bg-white h-20 stick' : 'sticky top-0  w-full  md:px-32 font-sans  bg-white h-20 stick'}>
            <div className='h-20 md:h-20   flex flex-col justify-between px-0 md:px-5 md:flex-row  md:flex md:justify-between md:items-center '>
                <div className=' md:block flex justify-between items-center '>
                    <img src={LOGO} className='cursor-pointer' />
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
                        <li className='hover:text-gray-300 transition'>Home</li>
                        <li className='hover:text-gray-300'>About</li>
                        <li className='hover:text-gray-300'>Courses <i class="fa-solid fa-angle-down text-xs"></i></li>
                        <li className='hover:text-gray-300'>Contact</li>
                        <li className='hover:text-gray-300'>Blog <i class="fa-solid fa-angle-down text-xs"></i></li>
                    </ul>

                </nav>

            </div>

        </header>




    )
}

export default Navbar