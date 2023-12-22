import React from 'react'

const TopHead = () => {
    return (
        <div>
            <main className="flex justify-around items-center bg-[#f9f9f9] h-14 px-24">
                <div className=" hidden md:flex items-center gap-2">
                    <i class="fa-solid fa-clock-rotate-left text-[#f27c1d] text-xl"></i>
                    <p className="text-sm">
                        Mon-Sat, 9am-7pm Closed Sundays</p>
                </div>
                <div className="flex items-center gap-2">
                    <i class="fa-regular fa-envelope text-[#f27c1d] text-xl"></i>
                    <p className="text-sm">
                        info@sunadhtechnologies.com</p>
                </div>
                <div>
                    <p className=" hidden md:bg-[#f27c1d] text-white h-14 md:flex items-center px-10 font-bold tracking-wider">+91 7674 813 794</p>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-8 text-[#f27c1d] text-lg">
                        <li className="fa-brands fa-facebook-f"></li>
                        <li className="fa-brands fa-twitter"></li>
                        <li className="fa-brands fa-instagram"></li>
                        <li className="fa-brands fa-linkedin-in"></li>
                        <li className="fa-brands fa-youtube"></li>
                    </ul>
                </div>
            </main>

        </div>
    )
}

export default TopHead