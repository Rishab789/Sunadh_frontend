import LOGO from '../public/assets/sunadh-removebg-preview.png'
import TopHead from '../components/TopHead'



const Navbar = () => {
    return (<div>
        <TopHead />
        <header className='w-full md:px-32 font-sans h-10 md:h-20 sticky top-0 bg-white'>
            <div className='flex justify-between px-5  md:flex md:justify-between items-center'>
                <di>
                    <img src={LOGO} className='cursor-pointer' />
                </di>
                <nav className='hidden md:block'>
                    <ul className='flex gap-14 text-base cursor-pointer'>
                        <li className='hover:text-gray-300 transition'>Home</li>
                        <li className='hover:text-gray-300'>About</li>
                        <li className='hover:text-gray-300'>Courses <i class="fa-solid fa-angle-down text-xs"></i></li>
                        <li className='hover:text-gray-300'>Contact</li>
                        <li className='hover:text-gray-300'>Blog <i class="fa-solid fa-angle-down text-xs"></i></li>
                    </ul>
                </nav>
                <div className='block pr-2 md:hidden'>

                    <i class="fa-solid fa-bars text-2xl"></i>
                </div>
            </div>

        </header>

    </div>



    )
}

export default Navbar